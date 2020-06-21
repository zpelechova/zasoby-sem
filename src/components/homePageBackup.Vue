<template class="homepage">
  <div class="homepage__container">
    <div class="background__image">
      <div class="content">
        <h1>KDO MI DOVEZE NÁKUP?</h1>
        <form action class="find__your__retailer" v-on:submit.prevent="display">
          <div class="address">
            <input
              type="text"
              class="form_item"
              name="street"
              v-model="street"
              placeholder="ULICE A ČÍSLO"
            />
            <input type="text" class="form_item" name="city" v-model="city" placeholder="OBEC" />
            <input type="text" class="form_item" name="zip" v-model="zip" placeholder="PSČ" />
          </div>
          <div>
            <button class="btn" type="submit">POSLAT</button>
          </div>
        </form>

        <router-link to="/Delivery" class="delivery">ROZVOZ</router-link>
        <router-link to="/Parcels" class="parcels">BALÍKY</router-link>
      </div>
    </div>
    <div class="retailer__logos">
      <a href="https://www.kosik.cz/" target="_blank">
        <img class="kosik__logo" border="0" alt="kosik__logo" src="assets\img\kosik_logo.png" />
      </a>
      <a href="https://rohlik.cz" target="_blank">
        <img class="rohlik__logo" border="0" alt="rohlik__logo" src="assets\img\rohlik_logo.png" />
      </a>
      <a href="https://nakup.itesco.cz/groceries/" target="_blank">
        <img class="tesco__logo" border="0" alt="tesco__logo" src="assets\img\tesco_logo.png" />
      </a>
    </div>
  </div>
</template>

<script>
import {router} from "../index.js"
export default {
  name: "Homepage",
  data() {
    return {
      street: "",
      city: "",
      zip: "",
      loading: false
    };
  },
  methods: {
    display() {
      this.loading = true;
      let counter = 2;
      let results = [];
      const notify = message => {
        results.push(message);
        if (counter === 0) {
          this.loading = false;
          console.log(results);
          // for (let res = 0; res < results.length; res++) {
          //   result.textContent += results[res];
          // }
          router.push("delivery", results)
        }

      };
      // rohlik
      const rohlikUrl =
        "https://api.apify.com/v2/acts/zuzka~rohlik/run-sync?token=WDXyEPPmbeKBX5eHAyiszBHQ7&timeout=600";

      fetch(rohlikUrl, {
        body: `{"street": "${this.street}", "city": "${this.city}", "zip": "${this.zip}"}`,
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
        this.street
      )}&city=${encodeURIParam(this.city)}&zip=${encodeURIParam(this.zip)}`;
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
  }
};
</script>

<style scoped>
.form_item {
  width: 100%;
  margin: auto;
  border: 1px solid #9d9065;
  color: #9d9065;
  font-family: Cabin;
  text-align: center;
  margin: 1vh;
  padding: 1vh;
}

::placeholder {
  color: #9d9065;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #9d9065;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #9d9065;
}

input:focus {
  outline-color: #ffe355;
}

.btn {
  width: 100%;
  background-color: #9d9065;
  color: #fff9e8;
  font-family: Cabin;
  text-align: center;
  margin: 1vh;
  padding: 1vh;
}

.btn:focus {
  outline-color: #ffe355;
}

h1 {
  font-size: 3.5vh;
  text-align: center;
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
  height: 38vh;
  padding: 1em;
  opacity: 0.75;
  box-shadow: 0 0 10px 8px #9d9065;
  background-color: #fff9e8;
}

.homepage__container {
  height: 89vh;
  margin: 0 auto;
  width: 95vw;
  display: flex;
  flex-direction: column;
}

.background__image {
  background-image: url(../assets/img/homepage_road.jpg);
  display: flex;
  flex-grow: 4;
  flex-shrink: 4;
  justify-content: center;
  align-items: flex-start;
  min-height: 62vh;
  background-color: #9d9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 8px #9d9065;
}

.retailer__logos {
  align-self: center;
  padding: 3vh;
  width: 100vw;
  display: flex;
  flex-grow: 0.3;
  flex-shrink: 0.3;
  align-items: flex-end;
  align-items: space-evenly;
  justify-content: space-evenly;
}

.kosik__logo,
.rohlik__logo,
.tesco__logo {
  width: 20vw;
  height: auto;
}

@media screen and (min-width: 576px) and (max-width: 991px) {
  .background__image {
    min-height: 78vh;
    padding: 8vh 0vw 8vh 0vw;
  }
  .homepage__container {
    height: auto;
  }
  .kosik__logo,
  .rohlik__logo,
  .tesco__logo {
    width: 10vw;
    height: auto;
  }
}

@media screen and (min-width: 992px) {
  p {
    font-size: 1.25em;
  }

  .background__image {
    height: 62vh;
    flex-basis: 62vw;
    padding: 8vh 0vw 8vh 0vw;
    border-radius: 5%;
  }

  .content {
    width: 32vw;
    margin: auto;
    border-radius: 5%;
  }
  .homepage__container {
    height: auto;
    width: 62vw;
  }
  .kosik__logo,
  .rohlik__logo,
  .tesco__logo {
    width: 10vw;
    height: auto;
  }
}
</style>
