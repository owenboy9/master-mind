import CodeBreaker from "./code-breaker"
import CodeMaster from "./code-master"
import ColorPegs from "./color-pegs"
import MarkPegs from "./mark-pegs"

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
    //informed attempt from code-breaker

    //game over:
    //code-breaker got it under 8 attempts
    //they doesn't
  }

  /*response-move logic is the toughest
  
  */

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