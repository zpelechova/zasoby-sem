<template class = "to__retailers">
  <div class="delivery__container">
    <div class="background__image">
      <div class="content">
        <p>NÁKUP NA VAŠI ADRESU VÁM MŮŽE PŘIVÉZT</p>
        <!-- <p>Mezi rozvozovými časy eshopů přepínejte přes logo rozvozce.</p> -->
        <div class="retailer__logos">
          <div id="kosikReturn">
            <div id="kosikDelivers"></div>
            <div id="kosikSlot"></div>
            <a href="https://www.kosik.cz/" target="_blank">
              <img class="kosik__logo" border="0" alt="kosik__logo" src="assets\img\kosik_logo.png" />
            </a>
          </div>
          <div id="rohlikReturn">
            <div id="rohlikDelivers"></div>
            <div id="rohlikSlot"></div>
            <a href="https://rohlik.cz" target="_blank">
              <img
                class="rohlik__logo"
                border="0"
                alt="rohlik__logo"
                src="assets\img\rohlik_logo.png"
              />
            </a>
          </div>
          <div id="tescoReturn">
            <div id="tescoDelivers"></div>
            <div id="tescoSlot"></div>
            <a href="https://nakup.itesco.cz/groceries/" target="_blank">
              <img class="tesco__logo" border="0" alt="tesco__logo" src="assets\img\tesco_logo.png" />
            </a>
          </div>
          <div id="result">{{ result }}</div>
        </div>
        <p>JEN ČÁST SORTIMENTU K VÁM DOVÁŽÍ:</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery",
  props: ["street", "city", "zip"],
  data() {
    return {
      loading: true,
      result: ""
    };
  },
methods: {
    display() {
      const street = this.$route.query.street;
      const city = this.$route.query.city;
      const zip = this.$route.query.zip;
      let counter = 2;
      let results = [];
      const notify = message => {
        results.push(message);
        if (counter === 0) {
          this.loading = false;
          console.log(results);
          this.result = results
          // for (let res = 0; res < results.length; res++) {
          //   result.textContent += results[res];
          // }
        }
      };
      // rohlik
      const rohlikUrl =
        "https://api.apify.com/v2/acts/zuzka~rohlik/run-sync?token=WDXyEPPmbeKBX5eHAyiszBHQ7&timeout=600";

      fetch(rohlikUrl, {
        body: `{"street": "${street}", "city": "${city}", "zip": "${zip}"}`,
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })
        .then(rohlikResp => rohlikResp.json())
        .then(rohlikJson => {
          counter--;
          notify(rohlikJson.message);
        });

      // kosik
      const encodeURIParam = stringParam => {
        return encodeURI(stringParam.replace(/\s/g, "+"));
      };
      const kosikUrl = `https://www.kosik.cz/api/web/transport/windows?street=${encodeURIParam(
        street
      )}&city=${encodeURIParam(city)}&zip=${encodeURIParam(zip)}`;
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyUrl + kosikUrl)
        .then(kosikResp => kosikResp.json())
        .then(kosikJson => {
          // result.textContent = `Nejdříve vám Košík přiveze nákup ${kosikJson.earliest_timeslot}.`;
          if (kosikJson.times[0] === "8:00 - 18:00") {
            warning.textContent = " Ale dovážíme jen část sortimentu...";
          }
          counter--;
          notify(kosikJson.earliest_timeslot);
        });
    }
  },
  mounted() {
    this.display();
  }
};
</script>

<style scoped>
h1 {
  font-size: 3vh;
}
.content p {
  font-family: Cabin;
  font-size: 2vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  text-align: justify;
}

.content {
  margin: auto;
  width: 62vw;
  min-height: 38vh;
  padding: 1em;
  opacity: 0.75;
  box-shadow: 0 0 10px 8px #9d9065;
  background-color: #fff9e8;
}

.delivery__container {
  min-height: 62vh;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  display: flex;
  justify-content: center;
}

.background__image {
  background-image: url(../assets/img/road-5019069_about_us.jpg);
  display: flex;
  flex-basis: 100vw;
  height: 88vh;
  justify-content: center;
  align-items: flex-start;
  min-height: 62vh;
  background-color: #9d9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 8px #9d9065;
}

.kosik__logo,
.rohlik__logo,
.tesco__logo {
  width: 5vw;
  height: auto;
}

.link {
  text-decoration: none;
  color: darkred;
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  .background__image {
    min-height: 62vh;
    padding: 8vh 0vw 8vh 0vw;
    margin-bottom: 19vh;
  }
}

@media screen and (min-width: 992px) {
  .background__image {
    min-height: 73vh;
    flex-basis: 62vw;
    padding: 8vh 0vw 8vh 0vw;
    border-radius: 5%;
    margin-bottom: 19vh;
  }

  .content {
    width: 32vw;
    margin: auto;
    border-radius: 5%;
  }
}
</style>