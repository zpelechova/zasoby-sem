new Vue({
  el: '#app',
  data: {
    street: "",
    city: "",
    zip: "",
    loading: false,
    result: "",
    warning: ""
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
        .then((resp) => resp.json())
        .then((json) => {
          result.textContent = `Nejdříve vám Košík přiveze nákup ${json.earliest_timeslot}.`;
          this.loading = false;
          if (json.times[0] === "8:00 - 18:00"){
            warning.textContent = " Ale dovážíme jen část sortimentu..." 
          }
        });
    }
  }
});