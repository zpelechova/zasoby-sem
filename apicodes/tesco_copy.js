const Apify = require('apify');
const httpRequest = require('@apify/http-request')
const zip = "11000"
let isDeliveredTo = "";

Apify.main(async () => {
  // const input = await Apify.getValue('INPUT');

  // const zip = input.zip || process.env.zip;

  const proxyConfiguration =  await Apify.createProxyConfiguration({ groups: ['CZECH_LUMINATI'] });

  const { body: addressResponse } = await httpRequest({
    url: "https://itesco.cz/Ajax/",
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
    payload: `{\"zipcode\":\"${zip}\"}`,
    proxyUrl: proxyConfiguration.newUrl(),
    json: true,
  });
  const data = addressResponse.data;
  console.log(data);

  // const deliveryJson = await delivery.json();
  // const deliveryType = deliveryJson.result;
  // console.log(deliveryType);
  // if (deliveryType === -1) {
  //   console.log("Na Vaši adresu dovazime jen balik")
  // } else if (deliveryType === 1) {
  //   console.log("Na Vaši adresu dovazime cely sortiment")
  // } else {
  //   console.log("Neco se pokazilo...")
  // }
});
