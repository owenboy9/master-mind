import ColorPegs from "./colorPegs.js"

export default class CodeMaster {

  code = []
  colorPegs

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.code.push(this.colorPegs[Math.floor(Math.random() * 6)])
    }
    console.log(this.code) 
  }
}