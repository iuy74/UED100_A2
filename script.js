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
document.querySelectorAll(".copy-hex").forEach(button =>{
    button.addEventListener("click", () =>{
    copyHex(button.textContent.tirm());
    })
  })

}

function rgbhex () {
  const randomInt = Math.floor(Math.random() * 16777215);
  return `#${randomInt.toString(16).padStart(6, "0")}`;
}

function generatePalette (){
 const cards = document.querySelectorAll(".colour-card");
  
  cards.forEach(card =>{
    const hex = rgbhex();
    const swatch = card.querySelector(".swatch");
    const hexButton = card.querySelector(".copy-hex");

    swatch.style.backgroundColor = hex;
    hexButton.textContent = hex;

  });
 }

function HexMatch (hexcode){

}

function copyHex (hex) {
const status = document.querySelector("#palette-status");

  try {
    await navigator.clipboard.writeText(hex);
    status.textContent = `Copied ${hex}`;
  } catch (error) {
    status.textContent = "Content, couldn't copy try again or manually select"
  }
  }
}

function hexAppend (hex){

}
