<template class = "to__retailers">
  <div
    class="about__us__container">
      <div class="background__image">
        <div class="content">
          <h1> V ČEM VÁM MŮŽEME BÝT UŽITEČNÍ ? </h1>

          <p>Už se vám někdy stalo, že jste nestihli včas nakoupit a ještě k tomu jste věděli, že se do obchodu na nákup prostě nedostanete ani dnes ani zítra?</p> 
<p>V takové chvíli by bylo skvělé, kdybyste prostě mohli zavolat někoho, kdo vám přiveze zásoby, které potřebujete. A to co nejrychleji.</p> 
<p>Ale kdo by to měl být a kdy nejdříve může zásoby přivézt?</p>
<p>Právě na tuto otázku odpovídá projekt Zásoby sem!</p> 
<p> Klade si za cíl shromáždit co nejvíce informací na jedno místo a tím zrychlit a usnadnit výběr e-shopu, který vám může potraviny dovézt.</p>
<p>Stačí zadat adresu, na kterou byste si chtěli nechat nákup přivézt. Jako odpověď dostanete informace, kdo a kdy by vám mohl nákup přivézt.</p> 
<p>Dozvíte se také minimální výši nákupu a cenu dopravy. Je na vás, koho si pro dovoz jídla nakonec vyberete. </p>
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
  background-color: #9D9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 8px #9D9065;
}

@media screen and (min-width: 576px) and (max-width: 991px) {

}

@media screen and (min-width: 992px) {

 .background__image {
    min-height: 73vh;
    flex-basis: 62vw;
    margin:0 auto;
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