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
}

@media screen and (min-width: 767px) {

h1{
  margin:0px;
}
}
</style>
