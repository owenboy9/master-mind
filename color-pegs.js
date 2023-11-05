export default class ColorPegs {
  constructor() {
    // An array of color names for the code pegs
    this.codePegs = ["red", "yellow", "green", "blue", "orange", "purple"]

    // Get the container element by its id
    this.codePegsContainer = document.getElementById("codePegsContainer")

    // Create and append colored buttons
    this.codePegs.forEach((color) => {
      let button = document.createElement("button")
      button.style.backgroundColor = color
      button.className = "code-peg-button"
      codePegsContainer.appendChild(button)
    })
  }
}