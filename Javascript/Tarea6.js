let compras = ["Pollo", "Platanos", "Champiñones", "Uvas", "Cereal"];
compras.push("Aceite de Girasol");
compras.pop();

let peliculas = [
  {
    titulo: "El resplandor",
    director: "Stanley Kubrick",
    fecha: new Date("1980/01/01"),
  },
  {
    titulo: "La tumba de las luciérnagas",
    director: "Isao Takahata",
    fecha: new Date("1988/01/01"),
  },
  {
    titulo: "El pianista",
    director: "Roman Polanski",
    fecha: new Date("2002/01/01"),
  },
];

let peliculaPost = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date("2010/01/01")
);
let directores = peliculas.map((pelicula) => pelicula.director);
let peliculasTitulos = peliculas.map((pelicula) => pelicula.titulo);
let concat = directores.concat(peliculasTitulos);
let propa = [...directores, ...peliculasTitulos];
