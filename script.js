/* PSEUDOCODE
 * When the user clicks button with #generate-palette selector
 * Randomise the colour of each colour block with the .swatch selector
 * Pick a random colour from .
* The colours hexcode is displayed on the copy-hex class selector
* The hexcode communicates with color namer package, and replaces the colour-name selector p with the packages name.
* the hexcode is copyable with the .copy-hex selector */


function main() {
const generateButton = document.querySelector("#generate-palette");
  generateButton.addEventListener("click",generatePalette)
}

function rgbhex () {
  const randomInt = Math.floor(Math.random() * 16777215);
  return `#${randomInt(16).toString.padStart(6, '0')}`;
}

function generatePalette (primary, secondary, accent, background,text){
 
  document.querySelector("")
}

function HexMatch (hexcode){

}

function copyHex (Hex) {

}

function hexAppend (hex){

}
