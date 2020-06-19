<template class = "to__retailers">
  <div class="pro__rozvozce__container">
    <div class="background__image">
      <div class="content">
        <p>KONTAKTUJTE NÁS</p>
        <p>Také rozvážíte zboží na adresy a chtěli byste být součástí srovnávání rozvozů na našich stránkách? Napište nám.</p>
        <form class="let__us__know">
          <div class="name__eshop">
          <input type="text" class="name" name="name" placeholder="JMÉNO" />
          <input type="text" class="eshop__address" name="eshop__address" placeholder="ADRESA E-SHOPU" />
          </div>
          <div class="person__email"> 
          <input type="text" class="person" name="person" placeholder="KONTAKTNÍ OSOBA"/>
          <input type="text" class="email" name="email" placeholder="E-MAIL" />
          </div>
          <div class="phone__btn">
          <input type="text" class="phone__number" name="phone__number" placeholder="TELEFON" />
          <button class="btn" type="button">POSLAT</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pro__rozvozce"
};
</script>

<style scoped>

 .name,
 .eshop__address,
 .person,
 .email,
 .phone__number {
    width: 100%;
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

:-ms-input-placeholder { /* Internet Explorer 10-11 */
 color: #9d9065;
}

::-ms-input-placeholder { /* Microsoft Edge */
 color: #9d9065;
}

input:focus {
  outline-color:#ffe355;
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
  margin: 3em;
  padding: 1em;
  opacity: 0.75;
  box-shadow: 0 0 10px 8px #9D9065;
  background-color: #fff9e8;
}

.pro__rozvozce__container {
  min-height: 62vh;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  display: flex;
  justify-content: center;
}

.background__image {
  background-image: url(../assets/img/woodland-656969_registration.jpg);
  display: flex;
  flex-basis: 95vw;
  justify-content: center;
  align-items: flex-start;
  min-height: 62vh;
  background-color: #9d9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 8px #9d9065;
}


@media screen and (min-width: 576px) and (max-width: 991px) {

}

@media screen and (min-width: 992px) {


  .background__image {
    min-height: 73vh;
    flex-basis: 62vw;
    padding: 8vh 0vw 8vh 0vw;
    margin-bottom: 19vh;
  }
}

/* @media screen and (min-width: 1200px) {
  .background__image {
    flex-basis: 62vw;
    min-height: 62vh;
    padding: 8vh 19vh 8vh 19vh;
    margin-bottom: 19vh;
  }

  .content[data-v-5d0d7ea8] {
    width: 38vw;
    border: 5px solid #9d9065;
    padding: 1em;
  }
} */
</style>