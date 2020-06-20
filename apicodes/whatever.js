new Vue({
  el: '#app',
  data: {
    street: "",
    city: "",
    zip: "",
    loading: false,
    result: "",
    warning: "",
    rohlik: ""
  },
  methods: {
    display() {
      this.loading = true;
      let counter = 2;
      let results = [];
      const notify = (message) => {
        results.push(message);
        if (counter === 0) {
          this.loading = false;
          console.log(results);
          // result.textContent = results;
          for (let res = 0; res < results.length; res++) {
            result.textContent += results[res];
          }
        }
      }
      // rohlik
      const rohlikUrl = "https://api.apify.com/v2/acts/zuzka~rohlik/run-sync?token=WDXyEPPmbeKBX5eHAyiszBHQ7&timeout=600";

      fetch(rohlikUrl, {
        "body": `{"street": "${street.value}", "city": "${city.value}", "zip": "${zip.value}"}`,
        "method": "POST",
        "headers": { 'Content-Type': 'application/json' }
      }
      )
        .then((rohlikResp) => rohlikResp.json())
        .then((rohlikJson) => {
          // rohlik.textContent = rohlikJson.message;
          counter--;
          notify(rohlikJson.message);
        });
      // kosik
      const encodeURIParam = (stringParam) => {
        return encodeURI(stringParam.replace(/\s/g, '+'));
      };
      const kosikUrl = `https://www.kosik.cz/api/web/transport/windows?street=${encodeURIParam(street.value)}&city=${encodeURIParam(city.value)}&zip=${encodeURIParam(zip.value)}`;
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      fetch(proxyUrl + kosikUrl)
        .then((kosikResp) => kosikResp.json())
        .then((kosikJson) => {
          // result.textContent = `Nejdříve vám Košík přiveze nákup ${kosikJson.earliest_timeslot}.`;
          if (kosikJson.times[0] === "8:00 - 18:00") {
            warning.textContent = " Ale dovážíme jen část sortimentu..."
          };
          counter--;
          notify(kosikJson.earliest_timeslot);
        });
    }
  }
});