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
      <div :class="isOpen ? 'menu' : 'closed__menu'">
        <router-link to="/o_projektu" class="about__us" v-on:click.native="isOpen=false">O PROJEKTU</router-link>
        <router-link to="/pro_rozvozce" class="pro__rozvozce" v-on:click.native="isOpen=false"
          >PRO ROZVOZCE</router-link
        >
      </div>
    </div>
    <router-view></router-view>

    <footer>
      <div id="logos">
        <div class="thank__you">Za pomoc děkujeme:</div>
        <div class="logos">
          <a href="https://www.czechitas.cz" target="_blank">
            <img src="assets/img/czechitas.png" alt="logo czechitas"
          /></a>
          <a href="https://apify.com/" target="_blank">
          <img src="assets/img/apify.png" alt="logo apify" /></a>
          <a href="https://www.barclays.co.uk/" target="_blank">
          <img src="assets/img/barclays.png" alt="logo barclays" /></a>
        </div>
      </div>
      <div class="contact" id="mailto">
          <a href="mailto:zasobysem@gmail.com">KONTAKTUJTE NÁS</a>
        </div>
      <div id="cc">© 2019 COPYRIGHT: ZÁSOBY SEM</div>
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
}
html {
  font-family: "Cormorant", serif;
  font-weight: bold;
  color: #9d9065;
}
body {
  background-color: #fff9e8;
  font-size: 20px;
}

h1 {
  font-size: 1.2em;
  text-align: center;
  font-family: Cormorant;
}

#mailto {
  display: flex;
  align-items: center
}
.top__navigation {
  display: flex;
  max-width: 100%;
  width: 82vw;
  height: 9vh;
  margin: 0 auto;
}
.closed__menu {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-grow: 1;
  cursor: pointer;
}
.about__us,
.pro__rozvozce {
      margin: 0px 0 8px 10px;
  font-size: 2vh;
  text-decoration: none;
  color: #9d9065;
  font-weight: bold;
  letter-spacing: 3px;
}
.icon {
  display: none;
}
.zasoby_logo {
  width: 12vw;
  height: auto;
  margin-top: 0vh;
  position: absolute;
  z-index: 2;
}

footer {
  display: flex;
  align-items: center;
  width: 82vw;
  height: 9vh;
  margin: 0 auto;
}

footer div {
  margin: 2vh auto;
}

img {
  width: 10vw;
  margin: 0 1vw;
}

#logos {
  display: flex;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
}

#cc {
text-align: center;
font-size: 10px;
}

.logos {
  display: flex;
  align-items: center;
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

 .thank__you {
  padding: 1rem 0;
  }

@media screen and (max-width: 767px) {
  body {
    font-size: 16px;
  }
  h1 {
    font-size: 1em;
  }
  .top__navigation {
    display: block;
    height: 10vh;
    width: 95vw;
  }

  .home {
    height: 10vh;
  }
  .zasoby_logo {
    width: 35vw;
    height: auto;
    margin: 0px;
    position: absolute;
    z-index: 2;
  }

  #logos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
}

  i.hamburger {
    font-size: 8vw;
    margin: 3vw;
    text-shadow: 2px 2px 8px #9d9065;
  }
  .menu {
    background-color: #9d9065;
    box-shadow: 0 0 10px 8px #9d9065;
    margin-bottom: 3vh;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .closed__menu {
    background-color: #9d9065;
    box-shadow: 0 0 10px 8px #9d9065;
    margin-top: 3vh;
    margin-bottom: 3vh;
    display: none;
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

  img {
    width: 25vw;
  }

  footer {
    display: flex;
    width: 95vw;
    min-height: 9vw;
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
}
</style>
