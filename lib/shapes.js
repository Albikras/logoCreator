class Shape {
  constructor(color) {
    this.color = color;
  }
}
class Triangle extends Shape {
  // constructor(shapeColor) {
  //   super(shapeColor);
  // }
  render() {
    return `<polygon fill='${this.color}' points='150,0 0,200 300,200'></polygon>`;
  }
}
class Square extends Shape {
  // constructor(shapeColor) {
  //   super(shapeColor);
  // }
  render() {
    return `<rect fill='${this.color}' x='0' y='0' width='300' height='200'></rect>`;
  }
}
class Circle extends Shape {
  // constructor(shapeColor) {
  //   super(shapeColor);
  // }
  render() {
    return `<circle fill='${this.color}' r='100' cx='150' cy='100'></circle>`;
  }
}

// const circle = new Circle();

module.exports = { Triangle, Square, Circle };
