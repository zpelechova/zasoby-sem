

<template>
  <div>
    <div class="top__navigation">
      <div class="home">
        <router-link to="/">
          <img
            class="zasoby_logo"
            border="0"
            alt="Zasoby_sem_logo"
            src="..\assets\img\zasoby_logo.png"
          />
        </router-link>
        <a @click="toggle" class="icon">
          <i class="hamburger fa fa-bars"></i>
        </a>
      </div>
      <div :class="isOpen ? 'menu' : 'closed__menu'">
        <router-link to="/o_projektu" class="about__us">O PROJEKTU</router-link>
        <router-link to="/pro_rozvozce" class="pro__rozvozce">ROZVOZCŮM</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
// <button
//         class="btn" :class="{'btn-active':active}"
//         v-on:click="isOpen"
//       >
<script>
export default {
  name: "App",
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      console.log("click");
    }
  }
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
}
.top__navigation {
  display: flex;
  max-width: 62vw;
  height: 19vh;
  margin: 0 auto;
}
.closed__menu {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-grow: 1;
}
.about__us,
.pro__rozvozce {
  margin: 3vh;
  font-size: 2.5vh;
  text-decoration: none;
  color: #9d9065;
  font-style: italic;
  letter-spacing: 3px;
}
.icon {
  display: none;
}
.zasoby_logo {
 width: 15vw;
    height: auto;
    margin-top: 8vh;
    position: absolute;
    z-index: 2;
}
@media screen and (max-width: 991px) {
  .top__navigation {
    display: block;
    max-width: none;
    height: 10vh;
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
  i.hamburger {
    font-size: 8vw;
    margin: 3vw;
    text-shadow: 2px 2px 8px #9d9065
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
  }
  .about__us,
  .pro__rozvozce {
    display: block;
    text-align: center;
    color: #fff9e8;
    text-decoration: none;
    font-size: 3.5vh;
    margin: 3vw;
    border: 2px dotted #ffe355;

  }
  .zasoby_logo:hover {
    background-color: #ffe355;
    box-shadow: 0 0 10px 8px #ffe355;
  }
  .top__navigation a.icon {
    float: right;
    display: block;
  }
  .top__navigation a:hover {
    background-color: #ffe355;
    color: #9d9065;
    box-shadow: 0 0 10px 8px #ffe355;
  }
  .top__navigation a.active {
    background-color: #9d9065;
    color: #fff9e8;
  }
}
</style>