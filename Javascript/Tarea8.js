function funSinParametros() {
  return true;
}

function funPromesa() {
  let promise = new Promise((res, rej) => {
    res();
  });
  promise
    .then(() => {
      setTimeout(() => {
        console.log("Hola soy una promesa");
      }, 5000);
    })
    .catch((err) => {
      console.log(err);
    });
}

function* funGenerador() {
  let indice = 0;
  while (true) {
    yield indice++;
  }
}

funPromesa();
let generator = funGenerador();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
