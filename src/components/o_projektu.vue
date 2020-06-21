<template class="to__retailers">
  <div class="about__us__container">
    <div class="background__image">
      <div class="content">
        <h1>K ČEMU JSOU ZÁSOBY SEM ?</h1>
        <p>
          Už se vám stalo, že jste nestihli včas nakoupit a ještě k tomu
          věděli, že se do obchodu prostě nedostanete ani dnes a třeba ani
          zítra?
        </p>
        <p>
          Nebylo by skvělé vědět o někom, kdo vám zásoby, které potřebujete,
          přiveze? A ideálně co nejdříve?
        </p>
        <p>Právě na tuto otázku odpovídá projekt Zásoby sem!</p>
        <p>
          Stačí zadat adresu, na kterou chcete zásoby dovézt. A my Vám řekneme
          nejenom kdo, ale i kdo nejdříve....
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>

h1 {
margin-top: 20px;
}
.content p {
  font-family: Cabin;
  font-size: 2vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  text-align: justify;
}

.content {
  width: 100%;
  height: 100%;
  padding: 1em;
  opacity: 0.75;
  box-shadow: 0 0 10px 8px #9d9065;
  background-color: #fff9e8;
  border-radius: 30px;
}

.about__us__container {
  min-height: 62vh;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  display: flex;
  justify-content: center;
}

.background__image {
  background-image: url(../assets/img/supplies_available_road.jpg);
  display: flex;
  flex-basis: 100vw;
  justify-content: center;
  align-items: flex-start;
  min-height: 73vh;
  background-color: #9d9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 8px #9d9065;
  border-radius: 30px;
}

@media screen and (min-width: 767px) {

 .background__image {
    height: 79vh;
    width: 82vw;
    margin:0 auto;
    padding: 3vh 0;
  }

  .about__us__container {
    height: 79vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
}

  .content {
    width: 100%;
    margin: auto;
  }
}
</style>
