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
        Body: `<div
        id="mailToCust"
        style="font-size: larger; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #9d9065; display:inline-block; background-color: #fff9e8; border-radius: 10px; padding: 30px;"
      >
        <h2>Vítejte na zásoby sem!</h2>
        <p>
          Váš obchod <strong>${this.shopName}</strong> už bude možná brzy rozvážet
          s námi,
          <strong>hurá!</strong>
        </p>
        <p>Co nejdříve se s Vámi spojíme!</p>
        <p><strong>Tým Zásoby sem</strong></p>
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
        Body: `<div
        id="mailToMe"
        style="font-size: larger; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #9d9065; display:inline-block; background-color: #fff9e8; border-radius: 10px; padding: 30px;"
              >
        <h2>Hurááá. Otevírají se nám nové obzory!</h2>
        <p>
          Právě jsme obdrželi novou žádost o zařazení obchodu
          <strong>${this.shopName}</strong> mezi naše zásobovače!
        </p>
        <p>
          Koukni na jejich webové stránky
          <span style="text-decoration: underline"
            ><a v-bind:href="${this.webPage}" target="_blank">tady</a></span
          >, a ještě tady: ${this.webPage}.
        </p>
        <p>
          A pak honem napiš na
          <span>
            <a v-bind:href="mailto:${this.email}">tento email</a> anebo na tento: ${this.email}
          </span>
          , kontaktní osoba je
          <strong> ${this.name}.</strong>
        </p>
        <p><strong>Zásoby sem jedou!!!</strong></p>
        <p>${FormattedMessage}</p>
      </div>`,
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