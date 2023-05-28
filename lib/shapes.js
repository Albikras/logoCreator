function logoGenerator(data) {
  const test = '';
  class logo {
    render(){

      const logodata = `<svg width='200' height='200'>
          ${test}
        </svg>`
    }
    
  }

  class Shape {}/////////////////////////////

  if (data.shapes === "triangle") {
    class Triangle extends Shape {
      render() {
        test =`<polygon fill='${data.shapeColor} points='100,0 0,200 200,200'></polygon>`
      }
    }
  }
  if (data.shapes === "square") {
    class Square extends Shape {
      render() {
        test =`<rect fill='${data.shapeColor} ></rect>`
      }
    }
  }
  if (data.shapes === "circle") {
    class Circle extends Shape {
      render() {
        test =`<circle fill='${data.shapeColor} r='100' cx='100' cy='100'></circle>`
      }
    }
  }
}

module.exports = logoGenerator;
