import moment from "moment";
moment.locale('cs')
let tescoNow = moment().add(1, 'days').startOf("hour").calendar();
console.log(tescoNow);

// //local code
// //rohlik
// let rohlik = moment(" 2020-06-21 06:00", "YYYY-MM-DD hh:mm").fromNow();
// console.log("rohlik " + rohlik);
// //tesco
// let nowTesco = moment().add(1, 'days'); 
// let tescoNow = nowTesco.startOf("hour").calendar();
// console.log("tesco " + tescoNow);
