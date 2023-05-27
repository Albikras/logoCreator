class Shape {}

class Triangle extends Shape {
  render() {
    return `<triangle width="300" height="200"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<square width="300" height="200"/>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="25" cy="75" r="20" width="300" height="200"/>`;
  }
}

// function renderShapeColor() {}
// function renderTextColor() {}

// function logoGenerator(data) {
//   const result = `<svg
//                     width="300"
//                     hieght="200"
//                     >`;
//   if (data.shapes === "circle") {
//   }
//   if (data.shapes === "triangle") {
//   }
//   if (data.shapes === "circle") {
//   }
// }

module.exports = logoGenerator;
