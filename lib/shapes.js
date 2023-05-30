/**
 * declare a parent class called 'Shape'
 */
class Shape {
  constructor(color) {
    this.color = color;
  }
  printdata() {
    console.log(this.color);
  }
}
/**
 * declare a class called 'Triangle' and have it inherit values from "Shape" class
 */
class Triangle extends Shape {
  render() {
    return `<polygon fill='${this.color}' points='150,0 0,200 300,200'></polygon>`;
  }
}
/**
 * declare a class called 'Square' and have it inherit values from "Shape" class
 */
class Square extends Shape {
  render() {
    return `<rect fill='${this.color}' x='0' y='0' width='300' height='200'></rect>`;
  }
}
/**
 * declare a class called 'Circle' and have it inherit values from "Shape" class
 */
class Circle extends Shape {
  render() {
    return `<circle fill='${this.color}' r='100' cx='150' cy='100'></circle>`;
  }
}

module.exports = { Shape, Triangle, Square, Circle }; //used to export the 3 classes to another file
