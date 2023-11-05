import CodeBreaker from "./code-breaker"
import CodeMaster from "./code-master"
import ColorPegs from "./color-pegs"
import MarkPegs from "./mark-pegs"

// create require for ESM-module projects
import Module from "node:module";
const require = Module.createRequire(import.meta.url);

// use require
const prompt = require('prompt-sync')({ sigint: true });

const log = console.log()

export default class Game {

  codeBreaker
  codeMaster
  colorPegs
  markPegs

  constructor() {
    log('welcome to your childhood\'s favorite game')
    this.round()
  }

  round() {
    //game setup:
    //create new 4-color code
    //random attempt from code-breaker

    //loop the following:

    //mark peg response
    //space for code-breaker to solve the puzzle: all the code does is open the input space for the code-breaker to make a new attempt, store it SOMEWHERE, and trigger a mark peg response

    //game over:
    //code-breaker broke the code in <= 10 attempts
    //they didn't
  }


  checkWin() {
    if (this.codeBreaker == this.codeMaster) {
      log('you win!')
    } else {
      //goto 20
      this.tryCode()
    }
  }
  
  checkLose() {
    if (this.attempts >= 8 && this.codeBreaker != this.codeMaster) {
      log('didn\'t make it this time: the combination was ' + this.codeMaster)
    } else {
      this.tryCode()
    }
  }

}

//code composed of four pegs, six colors (duplicates allowed? blanks allowed?)
//eight-twelve attempt rows on the decoding board
//four slots by each attempt row: black mark peg = right color & right position; white mark peg = right color