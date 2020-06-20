<template class = "to__retailers">
  <div class="delivery__container">
    <div class="background__image">
      <div class="content">
        <h1>ZÁSOBY VÁM MŮŽE DORUČIT:</h1>
        <!-- <p>Mezi rozvozovými časy eshopů přepínejte přes logo rozvozce.</p> -->

        <div class="retailer__logos">
          <div id="kosikReturn">
            <div id="logoKosik" class="free__slots">
              <a href="https://www.kosik.cz/" target="_blank">
                <img
                  class="kosik__logo"
                  border="0"
                  alt="kosik__logo"
                  src="assets\img\kosik_logo.png"
                />
              </a>
            </div>
            <div id="kosikSlot" class="free__slots">NEJDŘÍVE V:</div>
            <div id="kosikDelivers" class="free__slots">INFORMACE:</div>
          </div>
          <div id="rohlikReturn">
            <div id="logo_rohlik" class="free__slots">
              <a href="https://rohlik.cz" target="_blank">
                <img
                  class="rohlik__logo"
                  border="0"
                  alt="rohlik__logo"
                  src="assets\img\rohlik_logo.png"
                />
              </a>
            </div>
            <div id="rohlikSlot" class="free__slots">NEJDŘÍVE V:</div>
            <div id="rohlikDelivers" class="free__slots">INFORMACE:</div>
          </div>
          <div id="tescoReturn">
            <div class="free__slots">
              <a href="https://nakup.itesco.cz/groceries/" target="_blank">
                <img
                  class="tesco__logo"
                  border="0"
                  alt="tesco__logo"
                  src="assets\img\tesco_logo.png"
                />
              </a>
            </div>
            <div id="tescoSlot" class="free__slots">NEJDŘÍVE V:</div>
            <div id="tescoDelivers" class="free__slots">INFORMACE:</div>
          </div>
        </div>
        <p>JEN ČÁST SORTIMENTU K VÁM DOVÁŽÍ:</p>
        <p>{{results.kosik}}</p>
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
      results: {
        "kosik": "1",
        "rohlik": "2",
        "tesco": "3"
      }
    };
  },
  methods: {
    display() {
      const street = this.$route.query.street;
      const city = this.$route.query.city;
      const zip = this.$route.query.zip;
      let counter = 2;
      const notify = message => {
        if (counter === 0) {
          this.loading = false;
          console.log(results);
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
          if (kosikJson.times[0] === "8:00 - 18:00") {
            warning.textContent = " Ale dovážíme jen část sortimentu...";
          }
          counter--;
          this.results.kosik = kosikJson.earliest_timeslot;
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
#kosikReturn,
#rohlikReturn,
#tescoReturn div {
margin-bottom: 2vh;
}

.free__slots{
  margin:1em;
  text-align: center;
}

.retailer__logos {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content p {
  font-family: Cabin;
  font-size: 2vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  text-align: justify;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2vh auto;
  width: 62vw;
  min-height: 38vh;
  padding: 1em;
  opacity: 0.75;
  box-shadow: 0 0 10px 8px #9d9065;
  background-color: #fff9e8;
  border-radius: 30px;
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
  min-height: 88vh;
  justify-content: center;
  align-items: flex-start;
  min-height: 62vh;
  background-color: #9d9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 8px #9d9065;
  border-radius: 30px;
}

.kosik__logo,
.rohlik__logo,
.tesco__logo {
  width: 20vw;
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

#kosikReturn,
#rohlikReturn,
#tescoReturn {
  display: flex;

  margin-bottom: 2vh;
}

  .content {
    width: 50vw;
    margin: auto;
    border-radius: 5%;
  }

  .kosik__logo,
.rohlik__logo,
.tesco__logo {
  width: 10vw;
}
}
</style>