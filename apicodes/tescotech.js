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

"type=getDotcomAvailable&data%5Bzipcode%5D=11000&subtype=get_cities"
