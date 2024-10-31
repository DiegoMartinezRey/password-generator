// ## Normas del ejercicio

// - El ejercicio debe ser capaz de generar un password de la logitud que le establezcamos.
// - Los caracteres disponibles son:

// ```
//   ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/
// ```

// ## Pistas y pasos a seguir

// - Crear las 2 cajas iniciales
// - Poner los textos
// - Sincronizar el length del nuevo password con el input range
// - Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.

// ## Principios Importantes para la creación de aplicaciones.

// - Las funciones deben tener UNA ÚNICA responsabilidad, Es mejor tener 5 funciones con 2 líneas cada una que tener una sola función que se encargue de 5 tareas distintas.

const passwordTextElement = document.getElementById("password");
const lengthTextElement = document.getElementById("length");
const sliderElement = document.getElementById("slider");
const passwordButtonElement = document.getElementById("pass-button");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?";

const getRandomPassword = () => {
  let newString = "";

  for (let i = 0; i < sliderElement.value; i++) {
    newString += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordTextElement.textContent = newString;
};

passwordButtonElement.addEventListener("click", getRandomPassword);

const getSliderValue = () => {
  lengthTextElement.textContent = `LENGTH: ${sliderElement.value}`;
};

sliderElement.addEventListener("input", getSliderValue);
