<template>
  <div>
    <div class="top__navigation">
      <div class="home">
        <router-link to="/">
          <img
            class="zasoby_logo"
            border="0"
            alt="Zasoby_sem_logo"
            src="assets\img\zasoby_logo.png"
          />
        </router-link>
        <a @click="toggle" class="icon">
          <i class="hamburger fa fa-bars"></i>
        </a>
      </div>
      <div :class="isOpen ? 'opened__menu' : 'menu'">
        <router-link
          to="/o_projektu"
          class="about__us"
          v-on:click.native="isOpen = false"
          >O PROJEKTU</router-link
        >
        <router-link
          to="/pro_rozvozce"
          class="pro__rozvozce"
          v-on:click.native="isOpen = false"
          >PRO ROZVOZCE</router-link
        >
      </div>
    </div>
    <router-view></router-view>

    <footer>
      <div id="logos">
        <div class="thank__you">PARTNEŘI PROJEKTU:</div>
        <div class="logos">
          <a href="https://www.czechitas.cz" target="_blank">
            <img src="assets/img/czechitas.png" alt="logo czechitas"
          /></a>
          <a href="https://apify.com/" target="_blank">
            <img src="assets/img/apify.png" alt="logo apify"
          /></a>
          <a href="https://www.barclays.co.uk/" target="_blank">
            <img src="assets/img/barclays.png" alt="logo barclays"
          /></a>
        </div>
      </div>
      <div class="contact" id="mailto">
        <a href="mailto:zasobysem@gmail.com">KONTAKTUJTE NÁS</a>
      </div>
      <div id="cc">COPYRIGHT © 2020 ZÁSOBY SEM</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      console.log("click");
    },
  },
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
  margin: 0px;
  border: 0px;
  text-transform: uppercase;
}
html {
  font-family: "Cormorant", serif;
  font-weight: bold;
  color: #9d9065;
}
body {
  background-color: #fff9e8;
  font-size: 16px;
}

h1 {
  font-size: 1em;
  text-align: center;
  margin-bottom: 1vh;
}

.top__navigation {
  width: 82vw;
  height: 10vh;
  margin: 0 auto;
}

.top__navigation a.active {
  background-color: #9d9065;
  color: #fff9e8;
}
.top__navigation a.icon {
  float: right;
  display: block;
}
.zasoby_logo {
  width: 35vw;
  max-width: 160px;
  height: auto;
  margin: 0px;
  position: absolute;
  z-index: 2;
}

.about__us,
.pro__rozvozce {
  margin: 0px 0 6px 10px;
  font-size: 2vh;
  text-decoration: none;
  color: #9d9065;
  font-weight: bold;
  letter-spacing: 1px;
}
/* 
.about__us,
.pro__rozvozce {
  display: block;
  text-align: center;
  margin: 1.5vh;
  font-size: 3vh;
  text-decoration: none;
  color: #fff9e8;
  font-weight: bold;
  letter-spacing: 3px;
}
.about__us {
  margin-top: 5vh;
  margin-bottom: 1vh;
} */
.opened__menu {
  background-color: #9d9065;
  box-shadow: 0 0 10px 4px #9d9065;
  border-radius: 10px;
}
.zasoby_logo,
.icon {
  float: left;
  display: block;
  cursor: pointer;
}
.about__us,
.pro__rozvozce {
  display: block;
  text-align: center;
  margin: 1.5vh;
  font-size: 3vh;
  text-decoration: none;
  color: #fff9e8;
  font-weight: bold;
  letter-spacing: 3px;
}
.about__us {
  margin-top: 5vh;
  margin-bottom: 1vh;
}
.top__navigation a.icon {
  float: right;
  display: block;
}
.top__navigation a.active {
  background-color: #9d9065;
  color: #fff9e8;
}
i.hamburger {
  font-size: 250%;
  margin-right: 3vw;
  text-shadow: 2px 2px 4px #9d9065;
  margin-top: 3vh;
}

img {
  width: 25vw;
  margin: 0 1vw;
}

#logos {
  display: flex;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  flex-direction: column;
}

#cc {
  text-align: center;
  font-size: 10px;
}

.logos {
  display: flex;
  align-items: center;
  margin: 0;
}

.contact {
  font-size: 10px;
}

a {
  color: #9d9065;
  text-decoration: none;
}
.btn {
  cursor: pointer;
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
  text-align: center;
}

.content p {
  font-family: Cabin;
  margin-bottom: 2vh;
  text-align: center;
  margin: 1vh;
  font-size: small;
  text-transform: none;
  font-weight: 400;
}

.background__image {
  background-image: url(../assets/img/homepage_road.jpg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #9d9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 4px #9d9065;
  border-radius: 30px;
  height: 73vh;
  width: 80vw;
  margin: 0 auto;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
}

footer div {
  margin: 0px;
}

.thank__you {
  text-align: center;
  padding: 5px 0 0 0;
}

img {
  width: 20vw;
  max-width: 120px;
}

#mailto {
  display: flex;
  align-items: center;
}
@media screen and (min-width: 767px) {
  /* body {
    font-size: 20px;
  } */
  h1 {
    font-size: 1.2em;
  }

  .home {
    height: 10vh;
  }
  .top__navigation {
    display: flex;
    justify-content: space-between;
    height: 12vh;
  }

  .top__navigation a.icon {
    display: none;
  }

  .zasoby_logo {
    float: left;
    display: block;
    cursor: pointer;
  }

  .about__us,
  .pro__rozvozce {
    margin: 0px 0 6px 10px;
    font-size: 2vh;
    text-decoration: none;
    color: #9d9065;
    font-weight: bold;
    letter-spacing: 1px;
    align-items: flex-end;
    display: flex;
  }
  .pro__rozvozce {
    margin-right: 3vh;
  }

  .menu {
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
  }

  .icon {
    display: none;
  }
  .zasoby_logo {
    width: 19vw;
    max-width: 200px;
    height: auto;
    margin-top: 0vh;
    position: absolute;
    z-index: 2;
  }

  .background__image {
    height: 75vh;
    width: 82vw;
      }


  .content {
    width: 50vw;
    max-width: 700px;
    margin: auto;
  }

  footer {
    margin: 8px auto;
    margin-top: 3vh;
    flex-direction: row;
    width: 80vw;
  }

  footer div {
    margin: 2vh auto;
  }
  #logos {
    margin-bottom: 0;
  }

  img {
    width: 10vw;
    max-width: 150px;
  }

  .thank__you {
    padding-bottom: 4px;
    margin: 0;
  }
  #mailto {
    order: -1;
  }
}
</style>
