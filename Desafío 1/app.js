let contenedor = ["ai", "enter", "imes", "ober", "ufat"];

let enviar = document.querySelector(".enviar");
enviar.addEventListener("click", function () {
  let input = document.querySelector(".input");
  let resultado = document.querySelector(".resultado");
  let newInput = "";
  for (let i = 0; i < input.value.length; i++) {
    if (input.value[i] === "a") {
      newInput += contenedor[0];
    } else if (input.value[i] === "e") {
      newInput += contenedor[1];
    } else if (input.value[i] === "i") {
      newInput += contenedor[2];
    } else if (input.value[i] === "o") {
      newInput += contenedor[3];
    } else if (input.value[i] === "u") {
      newInput += contenedor[4];
    } else if (input.value[i] === "b") {
      newInput += contenedor[1];
    } else {
      newInput += input.value[i];
    }
  }
  resultado.innerHTML = newInput;
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  let input = document.querySelector(".input");
  let resultado = document.querySelector(".resultado");
  input.value = "";
  resultado.innerHTML = "";
});

function updateClipboard() {
  let resultado = document.querySelector(".resultado");
  navigator.clipboard.writeText(resultado.innerHTML).then(() => {
    alert("Copiado al portapapeles");
  });
}

let copiar = document.querySelector(".copiar");
copiar.addEventListener("click", updateClipboard);
