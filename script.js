import namer from "color-namer";

function main() {
const generateButton = document.querySelector("#generate-palette");
generateButton.addEventListener("click",generatePalette)
document.querySelectorAll(".copy-hex").forEach(button =>{
    button.addEventListener("click", () =>{
    copyHex(button.textContent.trim());
    })
  })

}

function rgbhex () {
  const randomInt = Math.floor(Math.random() * 16777216);
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
    hexButton.setAttribute("aria-label",`Copy colour ${hex}`);

    // Update only the name, leaving the card number unchanged.
    card.querySelector(".colour-name").textContent = colourName(hex);

  });
  document.querySelector("#palette-status").textContent = "New palette generated.";
 }

async function copyHex (hex) {
const status = document.querySelector("#palette-status");

  try {
    await navigator.clipboard.writeText(hex);
    status.textContent = `Copied ${hex}`;
  } catch (error) {
    status.textContent = "Content, couldn't copy try again or manually select"
  }
  }

function colourName(hex) {
  return namer(hex, { pick: ["ntc"] }).ntc[0].name;
}

main();
