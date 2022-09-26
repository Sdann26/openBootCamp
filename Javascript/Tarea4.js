let firstName = "Danilo";
let lastName = "Blas";

let estudiante = firstName.concat(" ").concat(lastName);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let cantLetras = estudiante.length;

let firstLetter = estudiante.charAt(0);
let lastLetter = estudiante.charAt(estudiante.length - 1);
let eliminateSpace = estudiante.replace(" ", "");

let includeName = estudiante.includes("Danilo");
