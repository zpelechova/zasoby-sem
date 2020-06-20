<template class = "to__retailers">
  <div class="pro__rozvozce__container">
    <div class="background__image">
      <div class="content">
        <p>Chcete, aby naše skvělá stránka nabízela zákazníkům i Váš obchod?</p>
        <p>Vyplňte formulář a my se Vám ozveme.</p>
        <form class="let__us__know" method="post" v-on:submit.prevent="sendEmails">
          <input
            type="text"
            class="form_item"
            name="name"
            id="name"
            v-model="name"
            placeholder="JMÉNO*"
            required
            autofocus
          />
          <input
            type="email"
            class="form_item"
            name="email"
            id="email"
            v-model="email"
            placeholder="E-MAIL*"
            required
          />
          <input
            type="text"
            class="form_item"
            name="shopName"
            id="shopName"
            v-model="shopName"
            placeholder="NÁZEV OBCHODU*"
            required
          />
          <input
            type="url"
            class="form_item"
            name="webPage"
            id="webPage"
            v-model="webPage"
            placeholder="WEBOVÁ STRÁNKA*"
            required
          />
          <input
            type="text"
            class="form_item"
            name="message"
            id="message"
            v-model="message"
            placeholder="CHCEME VÁM VZKÁZAT"
          />
          <button class="btn" type="submit">PŘIDEJTE SE K ZÁSOBY SEM</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pro_rozvozce",
  data() {
    return {
      name: "",
      email: "",
      shopName: "",
      webPage: "",
      message: "",
      myMail: "zasobysem@gmail.com"
    };
  },
  methods: {
    sendEmails() {
      // sending email to the customer
      Email.send({
        Host: "smtp.gmail.com",
        Username: this.myMail,
        Password: "czechitas2020",
        To: this.email,
        From: this.myMail,
        Subject: "novy Vítejte na Zásoby sem",
        Body: `<div
        id="mailToCust"
        style="font-size: larger; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #9d9065; display:inline-block; background-color: #fff9e8; border-radius: 10px; padding: 30px;"
      >
        <h2>Vítejte na zásoby sem!</h2>
        <p>
          Váš obchod <strong>${this.shopName}</strong> už bude možná brzy rozvážet <span>&#128656;</span>
          s námi,
          <strong>hurá!</strong>
        </p>
        <p>Co nejdříve se s Vámi spojíme!</p>
        <p><strong><span>&#129309;</span> Tým Zásoby sem</strong></p>
      </div>`
      });
      // sending email to myself about the new request
      const FormattedMessage = this.message
        ? `P.S.: Abych nezapomněla, ještě vzkazují: "${this.message}".`
        : "";
      Email.send({
        Host: "smtp.gmail.com",
        Username: this.myMail,
        Password: "czechitas2020",
        To: this.myMail,
        From: this.myMail,
        Subject: "Další obchod chce k nám na stránku!",
        Body: `<div
        id="mailToMe"
        style="font-size: larger; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #9d9065; display:inline-block; background-color: #fff9e8; border-radius: 10px; padding: 30px;"
              >
        <h2>Hurááá. Otevírají se nám nové obzory! <span>&#128640;</span></h2>
        <p>
          Právě jsme obdrželi novou žádost o zařazení obchodu
          <strong>${this.shopName}</strong> mezi naše zásobovače!
        </p>
        <p>
          Koukni na jejich webové stránky ${this.webPage}.
        </p>
        <p>
          A pak honem napiš na ${this.email}, kontaktní osoba je
          <strong> ${this.name}.</strong>
        </p>
        <p><strong>Zásoby sem jedou!!! <span style='font-size:30px;'>&#128762;</span>
        <p>${FormattedMessage}</p>
      </div>`
      }).then(message =>
        alert("Už to k nám jede! Těšíme se, jak to spolu rozjedem!")
      );
    }
  }
};
</script>

<style scoped>
.form_item {
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

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #9d9065;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #9d9065;
}

input:focus {
  outline-color: #ffe355;
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
  box-shadow: 0 0 10px 8px #9d9065;
  background-color: #fff9e8;
  border-radius: 5%;
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
  border-radius: 5%;
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

@media screen and (min-width: 576px) and (max-width: 991px) {
}

@media screen and (min-width: 992px) {
  .background__image {
    min-height: 73vh;
    flex-basis: 62vw;
    padding: 8vh 0vw 8vh 0vw;
    margin-bottom: 19vh;
  }

  .content {
    width: 32vw;
    margin: auto;
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