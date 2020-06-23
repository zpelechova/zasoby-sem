const Apify = require('apify');
const httpRequest = require('@apify/http-request')

let message = "";
let isDeliveredTo = "";
let delivery = "";

Apify.main(async () => {
  const input = await Apify.getValue('INPUT');

  const street = input.street || process.env.street;
  const city = input.city || process.env.city;
  const zip = input.zip || process.env.zip;

  const proxyConfiguration = await Apify.createProxyConfiguration({ groups: ['CZECH_LUMINATI'] });

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
  console.log("I have just got the addressId, and it is " + addressId);
  isDeliveredTo = addressResponse.data.address.isDeliveredTo;
  console.log("Rohlík delivers to this address: " + isDeliveredTo);

  if (isDeliveredTo === true) {
    const deliveryAddress = `https://www.rohlik.cz/services/frontend-service/timeslots-api/0?userId=&addressId=${addressId}`
    const { body: deliveryResponse } = await httpRequest({
      url: deliveryAddress,
      proxyUrl: proxyConfiguration.newUrl(),
      json: true,
    });

    delivery = deliveryResponse;

    const slots = deliveryResponse.data.availabilityDays[0].slots;
    const firstSlotKey = Object.keys(slots)[0];
    const firstSlot = deliveryResponse.data.availabilityDays[0].slots[firstSlotKey][0].since;
    console.log(firstSlot);

    const days = deliveryResponse.data.availabilityDays;
    let parsedSlots = [];

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

    message = parsedSlots[0]
  } else {
    message = "Na vaši adresu zatím nedoručujeme."
    delivery = "Ne, ne a ne"
  }
  console.log(message)
  const data = {
    message,
    isDeliveredTo,
    delivery
  }
  await Apify.setValue('OUTPUT', data);
  await Apify.utils.sleep(200);
});