class SVG {
  constructor(textColor, text, svgShape) {
    this.textColor = textColor;
    this.text = text;
    this.svgShape = svgShape;
  }
  render() {
    return `<svg width='300' hieght='200'>
            <text class='${this.textColor}'>${this.text}</text>
            ${this.svgShape}
            </svg>`;
  }
}

module.exports = { SVG };
