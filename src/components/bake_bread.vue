<template class="to__retailers">
  <div class="bake__bread__container">
    <div class="background__image">
      <div class="content">
        <h1>KVÁSKOVÝ CHLÉB</h1>
        <p class="ingredience">ROZKVAS:</p>
        <ul class="ingredience">
          <li>100 g žitné chlebové mouky</li>
          <li>100 g vody</li>
          <li>1 polévková lžíce kvásku</li>
        </ul>
        <p>TĚSTO:</p>
        <ul class="ingredience">
          <li>rozkvas</li>
          <li>600 g pšeničné chlebové mouky</li>
          <li>430 g vody</li>
          <li>20 g soli</li>
        </ul>
        <p>POSTUP:</p>
        <p>
          Večer před pečením připravíme rozkvas. V misce smícháme mouku s vodou
          a kváskem a zakryté necháme při pokojové teplote nakvasit přibližně 9
          hodin.
        </p>
        <p>
          Asi 2 hodiny před přípravou těsta si smícháme pšeničnou chlebovou
          mouku s vodou a v zakryté misce necháme při pokojové teplotě
          proběhnout autolýzu. Je to proces, který nastává po smíchání vody s
          moukou. Voda aktivuje enzymy v mouce. Během autolýzy se rozvine gluten
          a těsto bude kompaktnější.
        </p>
        <p>
          Po dvou hodinách autolýzy těsto začneme hníst. Pokud použijeme robota,
          tak na nízkých otáčkách těsto hněteme cca 4 minuty. Následně přidáme
          rozkvas a těsto hněteme tak, aby se rozkvas zapracoval. Bude to trvat
          přibližně 2 minuty. Až potom přidáme sůl a těsto hněteme, dokud se
          nezačne odlepovat od stěn misky. Mělo by to trvat cca 3 minuty
          (záleží, jak výkonný robot používate).
        </p>
        <p>
          Pokud nemáte robota a hnětete těsto ručně, bude to trvat trošku déle a
          ano bude to i náročné, ale jen dostatečně vypracované těsto s
          vyvinutým lepkem vám zaručí andělský výsledek.
        </p>
        <p>
          Vypracované těsto necháme v zakryté misce kynout přibližně 2 hodiny.
          Během těchto dvou hodin budeme těsto překládat alespoň třikrát.
          Potřebujeme v těstě vybudovat pružnost a pevnost, aby se nám chleba na
          plechu neroztekl.
        </p>
        <p>
          Po posledním prádání necháme těsto odpočinout asi 20 minut a následně
          ho stočíme do ošatky. Celou ošatku pořádně vysypeme škrobem, aby se
          chleba na ní nepřilepil. Pracovní desku/podložku si velmi jemně
          poprášíme moukou a těsto na desku vyklopíme. Dobře vypracované a
          nakynuté těsto by mělo jednoduše vyklouznout ze skleněné misky. Dáváme
          si pozor, abychom s těstem příliš nebouchli. Těsto stočíme do ošatky.
          Stočené těsto přeložíme do ošatky spojem nahoru, přikryjeme igelitem a
          vložíme do chladničky o teplotě přibližně 5 stupňů. Takto necháme
          cesto pomaličku fermetovat, dokud nenakyne. Trvá to okolo 19 hodin,
          dle teploty v lednici.
        </p>
        <p>
          Pokud spěcháte, můžete chleba nechat vykynout při pokojové teplotě
          obvyklým způsobem.
        </p>
        <p>
          Troubu si před pečením rozehřejeme na nejvyšší možnou teplotu a budeme
          péct s párou prvních 10 minut. Následně páru z trouby vyvětráme, plech
          s vodou na zapaření trouby vyndáme a teplotu snížíme na 190 stupňů.
          Chleba dopečeme 20 minut. Řiďte se podle svojí trouby, každá totiž
          peče jinak. Upečený chleba necháme zchladit na mřížce. Krájíme, až
          vychladne.
        </p>
        <p>Zdroj: https://nelkafood.sk/anjelsky-dobry-kvaskovy-chlieb/</p>
        <p>
          Podrobnější informace a souvislosti o kvásku a pečení chleba naleznete
          v tomto dokumentu:
          <a
            href="https://docs.google.com/document/d/1y8jXcsaL2zV2gRh-YPAkDU2TSoDsc3i1SmzpymkxBHA/edit?usp=sharing"
            class="baking__tips"
            target="_blank"
            >RADY A TIPY O PEČENÍ CHLEBA</a
          >
        </p>
      </div>
      <!-- <img src="../assets/img/sourdough-bread.jpg" alt="bread" class="bread__img" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Pro__rozvozce",
};
</script>

<style scoped>
.bread__img {
  width: 75vw;
  display: block;
  margin: 0vh 2vw 5vh 2vw;
  border-radius: 30px;
  box-shadow: 0 0 10px 4px #9d9065;
  margin: 3vh auto 3vh auto;
}
.content p {
  text-align: left;
}

.content {
  display: inline-block;
  overflow: auto;
  margin: 5vh auto;
}

.ingredience {
  font-family: Cormorant;
  text-align: left;
  font-size: medium;
}

.bake__bread__container {
  min-height: 62vh;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  justify-content: center;
}

.background__image {
  background-image: url(../assets/img/bake_your_own_pastry.jpg);
}

.baking__tips {
  text-decoration: none;
  color: darkred;
}

@media screen and (min-width: 767px) {
  .bread__img {
    width: 57vw;
    margin: 3vh auto 3vh auto;
  }

  .ingredience {
    font-size: small;
  }
}
</style>
