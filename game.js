import ColorPegs from "./colorPegs"
import CodeMaster from "./codeMaster"
import CodeBreaker from "./codeBreaker"
import MarkPegs from "./markPegs"
import Board from "./board"


// create require for ESM-module projects
import Module from "node:module"
const require = Module.createRequire(import.meta.url)

// use require
const prompt = require('prompt-sync')({ sigint: true })

// låter oss använda funktionen som skriver till en fil
import { appendFileSync } from 'node:fs'

// funktionen lägger till texten i slutet av filen
//but i am personally not quite sure why i will need it here. maybe for the game to pick up where it ended?
appendFileSync(
  'message.txt',      // vilken fil vi vill lägga till text i
  'here is some text\n', // text vi vill lägga till, avslutas med \n för att lägga till radbrytning
  'utf8'              // formatet vi vill använda, utf8 betyder att det ska vara text
)

const log = console.log()

export default class Game {

  codeBreaker
  codeMaster
  colorPegs
  markPegs
  board

  constructor() {
    log('welcome to your childhood\'s favorite game')
    this.round()
  }

  round() {
    //game setup:
    //create new 4-color code
    this.codeMaster = new CodeMaster()

    //make an array of four random elements taken from the codePegs array: create a this.round or so array and push them one by one. the random issue can be solved by MathRandom() with the right parameters as the index mumber within codePegs
    //attempt from code-breaker

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
    if (this.attempts >= 10 && this.codeBreaker != this.codeMaster) {
      log('didn\'t make it this time: the combination was ' + this.codeMaster)
    } else {
      this.tryCode()
    }
  }

}

//code composed of four pegs, six colors (duplicates allowed? blanks allowed?)
//eight-twelve attempt rows on the decoding board
//four slots by each attempt row: black mark peg = right color & right position; white mark peg = right color