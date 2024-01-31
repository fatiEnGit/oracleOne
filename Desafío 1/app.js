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

const desencriptar = document.querySelector(".desencriptar");
desencriptar.addEventListener("click", function () {
  const input = document.querySelector(".input");
  const inputLower = input.value.toLowerCase();
  const resultado = document.querySelector(".resultado");
  const areaOutput = document.querySelector(".area-output");
  let newInput = "";
  let i = 0;

  if (inputLower === input.value && !caracteresEspeciales.test(input.value)) {
    while (i < input.value.length) {
      switch (input.value.substr(i, 5)) {
        case "enter":
          newInput += "e";
          i += 5;
          break;
        case "imes":
          newInput += "i";
          i += 4;
          break;
        case "ober":
          newInput += "o";
          i += 4;
          break;
        case "ufat":
          newInput += "u";
          i += 4;
          break;
        default:
          newInput += input.value[i];
          i++;
          break;
      }
    }
    resultado.textContent = newInput;
    areaOutput.style.backgroundImage = "none";
  } else {
    alert("Solo se aceptan letras minúsculas y sin caracteres especiales");
  }
});
