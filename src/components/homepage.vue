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

.content p {
  font-family: Cabin;
  margin-bottom: 2vh;
  text-align: justify;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 38vh;
  padding: 1em;
  opacity: 0.8;
  box-shadow: 0 0 10px 4px #9d9065;
  background-color: #fff9e8;
  border-radius: 30px;
  justify-content: center;
  width: 60vw;
min-width: 200px;
}

.homepage__container {
  height: 73vh;
  margin: 0 auto;
  width: 95vw;
  display: flex;
  flex-direction: column;
}

.background__image {
  background-image: url(../assets/img/homepage_road.jpg);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 4;
  flex-shrink: 4;
  justify-content: center;
  align-items: center;
  height: 73vh;
  background-color: #9d9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 4px #9d9065;
  border-radius: 30px;
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

h1 {
  font-size: 1em;
  text-align: center;
  font-family: Cormorant;
  margin-bottom: 1vh;
}

@media screen and (min-width: 767px) {
  h1 {
    margin-top: 2vh;
  }

  p {
    font-size: 1.25em;
  }

  .background__image {
    height: 80vh;
    width: 82vw;
    padding: 8vh 0vw 8vh 0vw;
    margin: auto;
  }

  .content {
    width: 50vw;
    max-width: 500px;
    margin: auto;
  }
  .homepage__container {
    height: unset;
    width: unset;
    margin: auto;
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
