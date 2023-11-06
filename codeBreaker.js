import Module from "node:module"
const require = Module.createRequire(import.meta.url)
const prompt = require('prompt-sync')({ sigint: true })

import ColorPegs from "./colorPegs"

export default class CodeBreaker {

  colorPegs
  attempt = []

  constructor(questionText) {
    this.questionText = questionText
    this.answer = this.makeAnAttempt
  }

  askQuestion() {
    let userInput
    do {
      userInput = prompt(this.questionText).trim().toUpperCase()
      if (!this.shortColors(userInput) == true) { 
        console.log("you can only enter the following symbols: " + this.colorPegs)
      }
    } while (!this.shortColors(userInput) == true)
    
    return userInput
  }

  makeAnAttempt() {
    for (i = 0; i < 4; i++){
      this.attempt.push(this.askQuestion())
    }
    return this.attempt
  }

  shortColors(userInput) {
    return this.colorPegs.test(userInput)
  }

}