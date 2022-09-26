let info = {
  nombre: "Israel",
  apellido: "Blas",
  edad: 26,
  altura: 1.72,
  eresDesarrollador: true,
};

let { edad } = info;

let mejoresAmigos = [
  {
    nombre: "Andres",
    apellido: "Andrade",
    edad: 27,
    altura: 1.64,
    eresDesarrollador: false,
  },
  {
    nombre: "Alex",
    apellido: "Bedia",
    edad: 26,
    altura: 1.6,
    eresDesarrollador: false,
  },
];

let data = [info, ...mejoresAmigos];

let dataOrdenada = data.sort((a, b) => a.edad <= b.edad);

console.log(data);
