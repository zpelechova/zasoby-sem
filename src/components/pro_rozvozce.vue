<template class="to__retailers">
  <div class="pro__rozvozce__container">
    <div class="background__image">
      <div class="content">
        <h1>
          Chcete, aby naše skvělá stránka nabízela zákazníkům i Váš obchod?
        </h1>
        <h6>Vyplňte formulář a my se Vám ozveme.</h6>
        <form
          class="let__us__know"
          method="post"
          v-on:submit.prevent="sendEmails"
        >
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
            placeholder="WEBOVÁ STRÁNKA OBCHODU*"
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
      myMail: "zasobysem@gmail.com",
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
      </div>`,
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
      </div>`,
      }).then((message) =>
        this.$alert(
          "Těšíme se, jak to spolu rozjedem!",
          "Už to k nám jede! 🚚",
          "success"
        )
      );
      setTimeout(() => {
        this.name = "";
        this.email = "";
        this.shopName = "";
        this.webPage = "";
        this.message = "";
      }, 2000);
    },
  },
};
</script>

<style scoped>
.form_item {
  width: 80%;
  border: 1px solid #9d9065;
  color: #9d9065;
  font-family: Cabin;
  text-align: center;
  margin: 1vh;
  padding: 1vh;
}

::placeholder {
  color: #9d9065;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #9d9065;
}

::-ms-input-placeholder {
  color: #9d9065;
}

input:focus {
  outline-color: #ffe355;
}

.btn {
  width: 80%;
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

/* div.content h1 {
  font-size: 1em;
  text-transform: uppercase;
} */


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
}

input,
button {
  border-radius: 9px;
}

@media screen and (min-width: 767px) {
  .background__image {
    height: 79vh;
    width: 82vw;
  }

  .homepage__container {
    height: 73vh;
    width: 82vw;
  }

  .content {
    width: 50vw;
    max-width: 500px;
    margin: auto;
  }
}
</style>
