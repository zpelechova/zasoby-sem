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
        Subject: "Vítejte na Zásoby sem",
        Body: `Vítejte na zásoby sem! Váš obchod ${this.shopName} už bude brzy rozvážet s námi, hurá! Co nejdříve se s Vámi spojíme! Tým Zásoby sem `,
      })
      // sending email to myself about the new request
      Email.send({
        Host: "smtp.gmail.com",
        Username: this.myMail,
        Password: "czechitas2020",
        To: this.myMail,
        From: this.myMail,
        Subject: "Další obchod chce k nám na stránku!",
        Body: `Hurááá. Otevírají se nám nové obzory! Právě jsme obdrželi novou žádost o zařazení obchodu ${this.shopName} mezi naše zásobovače! Koukni na jejich webové stránky tady: ${this.webPage}. A pak honem napiš na email ${this.email}, kontaktní osoba je ${this.name}. Zásoby sem jedou!!! P.S.: Abych nezapomněla, ještě vzkazují: "${this.message}".`,
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