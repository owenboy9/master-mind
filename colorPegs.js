export default class ColorPegs {

  constructor() {
    // An array of color names for the code pegs
    this.colorPegs = ["red", "yellow", "green", "blue", "orange", "purple"]

    // Get the container element by its id
    this.colorPegsContainer = document.getElementById("colorPegsContainer")

    // Create and append colored buttons
    this.colorPegs.forEach((color) => {
      let button = document.createElement("button")
      button.style.backgroundColor = color
      button.className = "color-peg-button"
      colorPegsContainer.appendChild(button)
    })
  }
}