/**
 * declare a new class called SVG
 */
class SVG {
  constructor(textColor, text, svgShape) {
    this.textColor = textColor;
    this.text = text;
    this.svgShape = svgShape;
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version='1.1' width='300' hieght='200'>
            ${this.svgShape}
            <text fill="${this.textColor}" text-anchor="middle" x="150" y="125" font-size="60">${this.text}</text>
            </svg>`;
  }
}

module.exports = { SVG };//import Class 'SVG' 
