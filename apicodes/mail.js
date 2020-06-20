new Vue({
  el: '#app',
  data: {
    name: "",
    email: "",
    shopName: "",
    webPage: "",
    message: "",
    myMail: "zasobysem@gmail.com"
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
        Body:`<div
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
      })
      // sending email to myself about the new request
      const FormattedMessage = this.message ? `P.S.: Abych nezapomněla, ještě vzkazují: "${this.message}".` : "";
      Email.send({
        Host: "smtp.gmail.com",
        Username: this.myMail,
        Password: "czechitas2020",
        To: this.myMail,
        From: this.myMail,
        Subject: "Další obchod chce k nám na stránku!",
        Body:     `<div
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
      }).then(
        message => alert("Už to k nám jede! Těšíme se, jak to spolu rozjedem!")
      )

    }
  },
  //   mounted() {
  //     let input = document.querySelector('[autofocus]');
  //     if (input) {
  //         input.focus()
  //     }
  // }
});