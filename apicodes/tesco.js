const Apify = require('apify');
const fetch = require('node-fetch');

Apify.main(async () => {
  const input = await Apify.getValue('INPUT');
  const zip = input.zip || process.env.zip;
  let data = "";

  await fetch("https://itesco.cz/Ajax/", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,ru;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "pragma": "no-cache",
      "sec-ch-ua": "\"\\\\Not\\\"A;Brand\";v=\"99\", \"Chromium\";v=\"84\", \"Google Chrome\";v=\"84\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "__mobilsize__=1"
    },
    "referrer": "https://itesco.cz/sluzby-a-znacky/nakupy/vase-prvni-online-nakupy/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `type=getDotcomAvailable&data%5Bzipcode%5D=${zip}&subtype=get_cities`,
    "method": "POST",
    "mode": "cors"
  }).then((resp) => resp.json())
  .then((json) => {
    console.log(json);
    data = json  
  });
    await Apify.setValue('OUTPUT', data);
    await Apify.utils.sleep(200);
});