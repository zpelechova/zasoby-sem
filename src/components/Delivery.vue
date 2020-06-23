<template class="to__retailers">
  <div class="delivery__container">
    <div
      class="background__image"
      v-bind:class="{
        background__image: delivery,
        background__image_parcels: parcels,
      }"
    >
      <img
        class="loading"
        id="truck"
        src="assets\img\loading_free.gif"
        alt="Načítá se"
        v-if="loading"
      />
      <div class="content" v-if="!loading">
        <h1>ZÁSOBY VÁM MŮŽE DORUČIT:</h1>
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
            <div id="kosikSlot" class="free__slots">
              {{ results.kosikSlot }}
            </div>
            <div id="kosikDelivers" class="free__slots">
              {{ results.kosikDelivers }}
            </div>
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
            <div id="rohlikSlot" class="free__slots">
              {{ results.rohlikSlot }}
            </div>
            <div id="rohlikDelivers" class="free__slots">
              {{ results.rohlikDelivers }}
            </div>
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
            <div id="tescoSlot" class="free__slots">
              {{ results.tescoSlot }}
            </div>
            <div id="tescoDelivers" class="free__slots">
              {{ results.tescoDelivers }}
            </div>
          </div>
        </div>
        <p v-bind:class="{ no__information: !noRecipe, information: recipe }">
          Čerstvé pečivo si sice neobjednáte, ale nebuďte smutní, objednejte si
          mouku a upečte si svůj vlastní domácí chleba. Jak na to se dozvíte:
          <router-link to="/bake_bread" class="bake__bread">ZDE</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Delivery",
  data() {
    return {
      loading: true,
      delivery: true,
      parcels: false,
      noRecipe: false,
      recipe: true,
      results: {
        kosikSlot: "",
        rohlikSlot: "",
        tescoSlot: "",
        kosikDelivers: "",
        rohlikDelivers: "",
        tescoDelivers: "",
      },
      rohlikSlot: "",
      kosikSlot: "",
      tesco: "",
      rohlikDelivers: "Celý sortiment",
      kosikDelivers: "Celý sortiment",
      tescoDelivers: "Celý sortiment",
    };
  },
  methods: {
    display() {
      const street = this.$route.query.street;
      const city = this.$route.query.city;
      const zip = this.$route.query.zip;
      let counter = 3;
      const notify = () => {
        if (counter === 0) {
          this.loading = false;
          this.results.rohlikSlot = this.rohlikSlot;
          this.results.kosikSlot = this.kosikSlot;
          this.results.tescoSlot = this.tescoSlot;
          this.results.rohlikDelivers = this.rohlikDelivers;
          this.results.kosikDelivers = this.kosikDelivers;
          this.results.tescoDelivers = this.tescoDelivers;
          this.backgroundChange();
        }
      };
      // preparing and calling rohlik API
      const rohlikUrl =
        "https://api.apify.com/v2/acts/zuzka~rohlik/run-sync?token=WDXyEPPmbeKBX5eHAyiszBHQ7&timeout=600";
      fetch(rohlikUrl, {
        body: `{"street": "${street}", "city": "${city}", "zip": "${zip}"}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((rohlikResp) => rohlikResp.json())
        .then((rohlikJson) => {
          this.rohlikSlot = moment(
            rohlikJson.message,
            "YYYY-MM-DD hh:mm"
          ).calendar();
          if (rohlikJson.message === "Na vaši adresu zatím nedoručujeme.") {
            this.rohlikDelivers = "";
            this.rohlikSlot = "Na tuto adresu nerozváží";
          }
        })
        .catch(() => {
          //sem napisu, co se ma stát kdyz fetch hodi error
          console.log("Error on Rohlik fetch.");
          this.rohlikSlot = "Něco nefunguje, zkuste to prosím později";
          this.rohlikDelivers = "";
        })
        .then(() => {
          counter--;
          notify();
          console.log("Rohlik finished the run. Counter = " + counter);
        });

      // preparing and calling kosik API
      const encodeURIParam = (stringParam) => {
        return encodeURI(stringParam.replace(/\s/g, "+"));
      };
      const kosikUrl = `https://www.kosik.cz/api/web/transport/windows?street=${encodeURIParam(
        street
      )}&city=${encodeURIParam(city)}&zip=${encodeURIParam(zip)}`;
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyUrl + kosikUrl)
        .then((kosikResp) => kosikResp.json())
        .then((kosikJson) => {
          this.kosikSlot = kosikJson.earliest_timeslot.replace(" od ", " v ");
          if (kosikJson.times[0] === "8:00 - 18:00") {
            this.kosikDelivers = "Jen suchý sortiment";
          }
        })
        .catch(() => {
          //sem napisu, co se ma stát kdyz fetch hodi error
          console.log("Error on Kosik fetch.");
          this.kosikSlot = "Něco nefunguje, zkuste to prosím později";
          this.kosikDelivers = "";
        })
        .then(() => {
          counter--;
          console.log("Kosik finished the run. Counter = " + counter);
          notify();
        });

      // preparing and calling kosik API Tesco
      const url =
        "https://api.apify.com/v2/acts/zuzka~tesco/run-sync?token=WDXyEPPmbeKBX5eHAyiszBHQ7&timeout=600";
      fetch(url, {
        body: `{"zip": "${zip}"}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((tescoResp) => tescoResp.json())
        .then((tescoJson) => {
          this.tescoSlot = moment()
            .add(1, "days")
            .startOf("hour")
            .calendar();
          if (tescoJson.result === -1) {
            this.tescoDelivers = "Jen suchý sortiment";
            this.tescoSlot = moment()
              .add(3, "days")
              .startOf("hour")
              .calendar();
          }
        })
        .catch(() => {
          //sem napisu, co se ma stát kdyz fetch hodi error
          console.log("Error on Tesco fetch.");
          this.tescoSlot = "Něco nefunguje, zkuste to prosím později";
          this.tescoDelivers = "";
        })
        .then(() => {
          counter--;
          console.log("Tesco finished the run. Counter = " + counter);
          notify();
        });
    },

    // changing background based on delivery results
    pictureChange() {
      this.delivery = !this.delivery;
      this.parcels = !this.parcels;
      this.recipe = !this.recipe;
      this.noRecipe = !this.noRecipe;
    },
    backgroundChange() {
      if (
        this.rohlikDelivers !== "Celý sortiment" &&
        this.kosikDelivers !== "Celý sortiment" &&
        this.tescoDelivers !== "Celý sortiment"
      ) {
        this.pictureChange();
      }
    },
  },
  mounted() {
    this.display();
  },
  created() {
    moment.locale("cs");
  },
};
</script>

<style scoped>
.bake__bread {
  text-decoration: none;
  color: darkred;
}

.information {
  text-transform: uppercase;
}

.no__information {
  display: none;
}

#kosikReturn,
#rohlikReturn {
  margin-bottom: 2vh;
}
#tescoReturn {
  margin-top: 2vh;
}

.free__slots {
  text-align: center;
  text-transform: uppercase;
}

.retailer__logos {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img#truck.loading {
  height: 73vh;
  min-width: 80vw;
  box-shadow: 0 0 10px 4px #9d9065;
  border-radius: 30px;
}

.delivery__container {
  height: 73vh;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  display: flex;
  justify-content: center;
}

.background__image {
  background-image: url(../assets/img/road-5019069_about_us.jpg);
}

.background__image_parcels {
  background-image: url(../assets/img/full_supplies_not_available_road.jpg);
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

@media screen and (min-width: 767px) {
  img#truck.loading {
    height: 75vh;
    min-width: 82vw;
    box-shadow: 0 0 10px 4px #9d9065;
    border-radius: 30px;
  }
  h1 {
    font-size: 16px;
  }

  .free__slots {
    text-align: left;
    margin-left: 1vw;
    margin-right: 1vw;
    font-size: 14px;
  }

  #kosikReturn,
  #rohlikReturn,
  #tescoReturn {
    display: flex;
    margin-bottom: 2vh;
    align-items: center;
    justify-content: space-between;
  }

  .kosik__logo,
  .rohlik__logo,
  .tesco__logo {
    width: 10vw;
  }
}
</style>
