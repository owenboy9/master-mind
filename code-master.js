import ColorPegs from "./color-pegs"

export default class CodeMaster{
  
  code = []
  colorPegs 
  constructor() {
    for (i = 0; i < 4; i++){
      this.code.push(this.colorPegs[Math.floor(Math.random() * 6)])
    }
    return this.code
  }
}