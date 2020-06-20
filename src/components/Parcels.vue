<template class = "to__retailers">
  <div
    class="parcels__container">
      <div class="background__image">

         
          <div class="content">
          <p>NA VAŠI ADRESU ZASÍLÁ TRVANLIVÝ SORTIMENT:</p> 
         <p>Na eshop se dostanete skrz logo rozvozce.</p>
          <a href="https://www.kosik.cz/" target="_blank">
            <img
              class="kosik__logo"
              border="0"
              alt="kosik__logo"
              src="assets\img\kosik_logo.png"
            />
          </a>
          <a href="https://nakup.itesco.cz/groceries/" target="_blank">
            <img
              class="tesco__logo"
              border="0"
              alt="kosik__logo"
              src="assets\img\tesco_logo.png"
            />
          </a>
          <p>Čerstvé pečivo si sice neobjednáte, ale nebuďte smutní, objednejte si mouku a upečte si svoje vlastní domácí pečivo. Jak na to se dozvíte <router-link to="/bake_bread" class="bake__bread">ZDE</router-link>.</p> 
         
         
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Parcels",
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
  box-shadow: 0 0 10px 8px #9D9065;
  background-color: #fff9e8;
}

.parcels__container {
  min-height: 62vh;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  display: flex;
  justify-content: center;
}

.background__image {
  background-image: url(../assets/img/full_supplies_not_available_road.jpg);
  display: flex;
  flex-basis: 95vw;
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
.tesco__logo {
  width: 5vw;
  height:auto;
}

.bake__bread {
  text-decoration: none;
  color: darkred;
}
@media screen and (min-width: 576px) and (max-width: 991px) {

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
    width:32vw;
    margin: auto;
    border-radius: 5%;
  }

}

</style>