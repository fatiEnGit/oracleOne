const contenedor = ["ai", "enter", "imes", "ober", "ufat"];
const caracteresEspeciales = /[^\w\sñ]/g;

const enviar = document.querySelector(".enviar");
enviar.addEventListener("click", function () {
  const input = document.querySelector(".input");
  const inputLower = input.value.toLowerCase();
  const resultado = document.querySelector(".resultado");
  const areaOutput = document.querySelector(".area-output");
  let newInput = "";

  if (inputLower === input.value && !caracteresEspeciales.test(input.value)) {
    for (let i = 0; i < input.value.length; i++) {
      switch (input.value[i]) {
        case "a":
          newInput += contenedor[0];
          break;
        case "e":
          newInput += contenedor[1];
          break;
        case "i":
          newInput += contenedor[2];
          break;
        case "o":
          newInput += contenedor[3];
          break;
        case "u":
          newInput += contenedor[4];
          break;
        default:
          newInput += input.value[i];
          break;
      }
    }

    resultado.textContent = newInput;
    areaOutput.style.backgroundImage = "none";
  } else {
    alert("Solo se aceptan letras minúsculas y sin caracteres especiales");
  }
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  const input = document.querySelector(".input");
  const resultado = document.querySelector(".resultado");
  const areaOutput = document.querySelector(".area-output");
  input.value = "";
  resultado.textContent = "";
  areaOutput.style.backgroundImage = 'url("fondo.png")';
});

function updateClipboard() {
  const resultado = document.querySelector(".resultado");
  navigator.clipboard.writeText(resultado.textContent).then(() => {
    alert("Copiado al portapapeles");
  });
}

const copiar = document.querySelector(".copiar");
copiar.addEventListener("click", updateClipboard);

let desencriptar = document.querySelector(".desencriptar");
desencriptar.addEventListener("click", function () {
  let input = document.querySelector(".input");
  let inputLower = input.value.toLowerCase();
  let resultado = document.querySelector(".resultado");
  let areaOutput = document.querySelector(".area-output");
  let newInput = "";
  let i = 0;
  if (inputLower === input.value && !caracteresEspeciales.test(input.value)) {
    while (i < input.value.length) {
      if (input.value[i] === "a" && input.value[i + 1] === "i") {
        newInput += "a";
        i += 2;
      } else if (
        input.value[i] === "e" &&
        input.value[i + 1] === "n" &&
        input.value[i + 2] === "t" &&
        input.value[i + 3] === "e" &&
        input.value[i + 4] === "r"
      ) {
        newInput += "e";
        i += 5;
      } else if (
        input.value[i] === "i" &&
        input.value[i + 1] === "m" &&
        input.value[i + 2] === "e" &&
        input.value[i + 3] === "s"
      ) {
        newInput += "i";
        i += 4;
      } else if (
        input.value[i] === "o" &&
        input.value[i + 1] === "b" &&
        input.value[i + 2] === "e" &&
        input.value[i + 3] === "r"
      ) {
        newInput += "o";
        i += 4;
      } else if (
        input.value[i] === "u" &&
        input.value[i + 1] === "f" &&
        input.value[i + 2] === "a" &&
        input.value[i + 3] === "t"
      ) {
        newInput += "u";
        i += 4;
      } else {
        newInput += input.value[i];
        i++;
      }
    }
    resultado.innerHTML = newInput;
    areaOutput.style.backgroundImage = "none";
  } else {
    alert("Solo se aceptan letras minúsculas y sin caracteres especiales");
  }
});

