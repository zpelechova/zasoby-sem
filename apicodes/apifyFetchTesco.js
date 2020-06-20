const url = "https://api.apify.com/v2/acts/zuzka~tesco/run-sync?token=WDXyEPPmbeKBX5eHAyiszBHQ7&timeout=600";

fetch(url, {
  "body": `{"zip": "15000"}`,
  "method": "POST",
  "headers": { 'Content-Type': 'application/json' }
}
)
.then((tescoResp) => tescoResp.json())
.then((tescoJson) => console.log(tescoJson));

