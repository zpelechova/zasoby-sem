const url = "https://api.apify.com/v2/acts/zuzka~rohlik/run-sync?token=WDXyEPPmbeKBX5eHAyiszBHQ7&timeout=600";

fetch(url, {
  "body": `{"street": "Jindřicha Plachty 15", "city": "Praha", "zip": "15000"}`,
  "method": "POST",
  "headers": { 'Content-Type': 'application/json' }
}
)
  .then((resp) => resp.json())
  // .then((json) => console.log(json.data));
  .then((json) => console.log(json));

