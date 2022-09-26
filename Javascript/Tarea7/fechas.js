let today = new Date(Date.now());
let myBirthday = new Date(1996, 01, 02);
let comparation =
  today > myBirthday
    ? "Hoy es más tarde que mi cumpleaños"
    : "Hoy no es más tarde que mi cumpleaños";
const day = myBirthday.getDate();
const month = myBirthday.getMonth() + 1;
const year = myBirthday.getFullYear();
