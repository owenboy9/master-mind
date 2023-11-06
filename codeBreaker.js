import Module from "node:module"
const require = Module.createRequire(import.meta.url)
const prompt = require('prompt-sync')({ sigint: true })

import ColorPegs from "./colorPegs"

export default class CodeBreaker {

  colorPegs

  constructor(questionText) {
    this.questionText = questionText
    this.answer = this.askQuestion()
  }

  askQuestion() {
    let userInput
    do {
      userInput = prompt(this.questionText)
      if (!this.shortColors(userInput) == true) { 
        console.log("you can only enter the following symbols: " + this.colorPegs)
      }
    } while (!this.shortColors(userInput) == true)
    return userInput
  }

  shortColors(userInput) {
    return this.colorPegs.test(userInput)
  }

}