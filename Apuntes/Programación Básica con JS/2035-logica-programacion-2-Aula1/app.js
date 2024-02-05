let encriptado = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

let palabra = "gato";
let nuevaPalabra = "";

for (let i = 0; i < palabra.length; i++) {
  if (palabra[i] in encriptado) {
    nuevaPalabra += encriptado[palabra[i]];
  } else {
    nuevaPalabra += palabra[i];
  }
}



console.log(nuevaPalabra);
