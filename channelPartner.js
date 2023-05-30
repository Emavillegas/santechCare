// channel partner

//Initial References
let submitButton = document.getElementById("submit-button");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";
//Generate Text
const textGenerator = () => {
  let generatedText = "";
  /* String.fromCharCode gives ASCII value from a given number */
  // total 6 letters hence loop of 3
  for (let i = 0; i < 2; i++) {
    //65-90 numbers are capital letters
    generatedText += String.fromCharCode(randomNumber(65, 90));
    //97-122 are small letters
    generatedText += String.fromCharCode(randomNumber(97, 122));
    //48-57 are numbers from 0-9
    generatedText += String.fromCharCode(randomNumber(48, 57));
  }
  return generatedText;
};
//Generate random numbers between a given range
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
//Canvas part
function drawStringOnCanvas(string) {
  //The getContext() function returns the drawing context that has all the drawing properties and functions needed to draw on canvas
  let ctx = canvas.getContext("2d");
  //clear canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //array of text color
  const textColors = ["rgb(0,0,0)", "rgb(130,130,130)"];
  //space between letters
  const letterSpace = 150 / string.length;
  //loop through string
  for (let i = 0; i < string.length; i++) {
    //Define initial space on X axis
    const xInitialSpace = 25;
    //Set font for canvas element
    ctx.font = "20px Roboto Mono";
    //set text color
    ctx.fillStyle = textColors[randomNumber(0, 1)];
    ctx.fillText(
      string[i],
      xInitialSpace + i * letterSpace,
      randomNumber(25, 40),
      100
    );
  }
}
//Initial Function
function triggerFunction() {
  //clear Input
  userInput.value = "";
  text = textGenerator();
  console.log(text);
  //Randomize the text so that everytime the position of numbers and small letters is random
  text = [...text].sort(() => Math.random() - 0.5).join("");
  drawStringOnCanvas(text);
}
//call triggerFunction for reload button
reloadButton.addEventListener("click", triggerFunction);
//call triggerFunction when page loads
window.onload = () => triggerFunction();
//When user clicks on submit
submitButton.addEventListener("click", () => {
  //check if user input  == generated text
  if (userInput.value === text) {
    alert("Success");
  } else {
    alert("Incorrect");
    triggerFunction();
  }
});








// formulario hecho por ema-- no funciona como quiero 


// JavaScript
async function fetchLocationData() {
  const citySelect = document.getElementById('city');
  const stateSelect = document.getElementById('state');
  const zipCodeInput = document.getElementById('zipCode');

  try {
    // Obtener datos de ubicación utilizando la API de OpenCage Data
    const apiKey = `2aa93cf4ab4b4210944f01582690a717`; // Reemplaza 'TU_API_KEY' con tu clave de API de OpenCage Data
    const query = 'q=Latitude,Longitude&no_annotations=1';
    const url = `https://api.opencagedata.com/geocode/v1/json?${query}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    // Obtener ciudades, estados y códigos postales únicos de los resultados
    const cities = new Set();
    const states = new Set();
    const zipCodes = new Set();
    data.results.forEach(result => {
      if (result.components.city) {
        cities.add(result.components.city);
      }
      if (result.components.state) {
        states.add(result.components.state);
      }
      if (result.components.postcode) {
        zipCodes.add(result.components.postcode);
      }
    });

    // Llenar el campo de selección de ciudades
    cities.forEach(city => {
      const option = createOptionElement(city);
      citySelect.appendChild(option);
    });

    // Llenar el campo de selección de estados
    states.forEach(state => {
      const option = createOptionElement(state);
      stateSelect.appendChild(option);
    });

    // Llenar el campo de entrada de código postal
    zipCodes.forEach(zipCode => {
      const option = createOptionElement(zipCode);
      zipCodeInput.appendChild(option);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

function createOptionElement(value) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = value;
  return option;
}

fetchLocationData();
