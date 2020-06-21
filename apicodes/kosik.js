new Vue({
  el: '#app',
  data: {
    street: "",
    city: "",
    zip: "",
    loading: false,
  },
  methods: {
    display() {
      this.loading = true;
      const encodeURIParam = (stringParam) => {
        return encodeURI(stringParam.replace(/\s/g, '+'));
      };
      const targetUrl = `https://www.kosik.cz/api/web/transport/windows?street=${encodeURIParam(street.value)}&city=${encodeURIParam(city.value)}&zip=${encodeURIParam(zip.value)}`;
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      fetch(proxyUrl + targetUrl)
        .then((kosikResp) => kosikResp.json())
        .then((kosikJson) => {
          let kosikSlot = kosikJson.earliest_timeslot;
          console.log(kosikSlot)
          if (kosikJson.times[0] === "8:00 - 18:00") {
            this.kosikDelivers = "Jen suchý sortiment";
            console.log(kosikJson.times[0])
          }
          this.loading = false;
        })
    }
  }
});