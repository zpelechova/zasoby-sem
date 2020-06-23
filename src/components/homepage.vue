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
              required
            />
            <input
              type="text"
              class="form_item"
              name="city"
              v-model="city"
              placeholder="OBEC"
              required
            />
            <input
              type="text"
              class="form_item"
              name="zip"
              v-model="zip"
              placeholder="PSČ"
              required
            />
          </div>
          <div>
            <button class="btn" type="submit">ZJISTIT</button>
          </div>
        </form>
      </div>
      <div class="retailer__logos">
        <a href="https://www.kosik.cz/" target="_blank">
          <img
            class="kosik__logo"
            border="0"
            alt="kosik__logo"
            src="assets\img\kosik_logo.png"
          />
        </a>
        <a href="https://rohlik.cz" target="_blank">
          <img
            class="rohlik__logo"
            border="0"
            alt="rohlik__logo"
            src="assets\img\rohlik_logo.png"
          />
        </a>
        <a href="https://nakup.itesco.cz/groceries/" target="_blank">
          <img
            class="tesco__logo"
            border="0"
            alt="tesco__logo"
            src="assets\img\tesco_logo.png"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from "../index.js";
export default {
  name: "Homepage",
  data() {
    return {
      street: "",
      city: "",
      zip: "",
    };
  },
  methods: {
    display() {
      router.push({
        path: "delivery",
        query: { street: this.street, city: this.city, zip: this.zip },
      });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form_item {
  width: 90%;
  margin: auto;
  border: 1px solid #9d9065;
  color: #9d9065;
  font-family: Cabin;
  text-align: center;
  margin: 1vh;
  padding: 1vh;
}

.address {
  display: flex;
  flex-direction: column;
  align-content: center;
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

input,
button {
  border-radius: 9px;
}

input:focus {
  outline-color: #ffe355;
}

.btn {
  width: 90%;
  background-color: #9d9065;
  color: #fff9e8;
  font-family: Cabin;
  text-align: center;
  margin: 1vh;
  padding: 1vh;
  letter-spacing: 1px;
}

.btn:focus {
  outline-color: #ffe355;
}

.background__image {
  background-image: url(../assets/img/homepage_road.jpg);
}

.homepage__container {
  height: 73vh;
  margin: 0 auto;
  width: 95vw;
  display: flex;
  flex-direction: column;
}

.retailer__logos {
  padding: 2vh;
  width: 80%;
  min-width: 200px;
  display: flex;
  align-items: flex-end;
  align-items: space-evenly;
  justify-content: space-evenly;
  background-color: #fff9e8;
  opacity: 0.6;
  border-radius: 20px;
  margin: 4vh;
}

.kosik__logo,
.rohlik__logo,
.tesco__logo {
  width: 10vw;
  height: auto;
}

.background__image {
  background-image: url(../assets/img/homepage_road.jpg);
}
@media screen and (min-width: 767px) {
  h1 {
    margin-top: 2vh;
  }

  p {
    font-size: 1.25em;
  }
  .background__image {
    padding: 8vh 0 0 0;
  }

  .kosik__logo,
  .rohlik__logo,
  .tesco__logo {
    width: 100px;
  }
  .retailer__logos {
    margin-top: 3vh;
  }
}
</style>
