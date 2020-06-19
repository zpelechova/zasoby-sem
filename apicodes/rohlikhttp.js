const Apify = require('apify');
const httpRequest = require('@apify/http-request')
// const street = "Jindřicha Plachty 15";
// const city = "Praha 5";
// const zip = "15000";
// const street = "Kozlovice 11";
// const city = "Záluží";
// const zip = "41301";
​
let message = "";
​
Apify.main(async () => {
    const input = await Apify.getValue('INPUT');
​
    const street = input.street || process.env.street;
    const city = input.city || process.env.city;
    const zip = input.zip || process.env.zip;
​
    const proxyConfiguration =  await Apify.createProxyConfiguration({ groups: ['CZECH_LUMINATI'] });
​
    const { body: addressResponse } = await httpRequest({
        url: "https://www.rohlik.cz/services/frontend-service/delivery-address/check",
        method: "POST",
        headers: {
            "accept": "application/json",
            "accept-language": "cs-CZ,cs;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-origin": "WEB",
            "referrer": "https://www.rohlik.cz/",
            "referrerPolicy": "no-referrer-when-downgrade",
        },
        payload: `{\"isGeocodeResult\":false,\"city\":\"${city}\",\"postalCode\":\"${zip}\",\"deliveryPointId\":null,\"streetWithNumber\":\"${street}\"}`,
        proxyUrl: proxyConfiguration.newUrl(),
        json: true,
    });
    const addressId = addressResponse.data.address.id;
    console.log(addressId);
    const isDeliveredTo = addressResponse.data.address.isDeliveredTo;
    console.log(isDeliveredTo);
​
    if (isDeliveredTo === true) {
​
        const deliveryAddress = `https://www.rohlik.cz/services/frontend-service/timeslots-api/0?userId=&addressId=${addressId}`
​
        const { body: deliveryResponse } = await httpRequest({
            url: deliveryAddress,
            proxyUrl: proxyConfiguration.newUrl(),
            json: true,
        });
        console.log(deliveryResponse.data.firstDeliveryText.default);
        console.log(deliveryResponse.data.firstDeliveryAvailableSinceMessage);
​
        const slots = deliveryResponse.data.availabilityDays[0].slots;
        const firstSlotKey = Object.keys(slots)[0];
        const firstSlot = deliveryResponse.data.availabilityDays[0].slots[firstSlotKey][0].since;
        console.log(firstSlot);
​
        const days = deliveryResponse.data.availabilityDays;
        let parsedSlots = [];
​
        for (let day in days) {
            for (let hour in days[day].slots) {
                for (let detail in days[day].slots[hour]) {
                    // console.log(days[day].slots[hour][detail].premium)
                    if (days[day].slots[hour][detail].premium === false && days[day].slots[hour][detail].timeSlotCapacityDTO.capacityMessage != "Vyprodáno") {
                        // console.log(days[day].slots[hour][detail].since);
                        parsedSlots.push(days[day].slots[hour][detail].since)
                    }
                }
            }
        };
​
        message = `Nejdříve Vám Rohlík zboží doručí ${parsedSlots[0]}.`
    } else {
​
        message = "Na vaši adresu zatím nedoručujeme."
    }
    console.log(message)
});
