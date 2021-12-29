function parseCount(number) {
    let parsedNumber = Number.parseInt(number);
    return Number.isNaN(parsedNumber) ?(function(){throw new TypeError('Невалидное значение')}()) : parsedNumber;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(error) {
        return error;
    }
}

////////////

class Triangle  {
    constructor(sideA, sideB, sideC)
    {
        this.sideA = sideA;
        this.sideB = sideB; 
        this.sideC = sideC;

        if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
            throw new TypeError('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        let perimeter = this.getPerimeter() / 2;
        return parseFloat(Math.sqrt(perimeter*((perimeter-this.sideA)*(perimeter-this.sideB)*(perimeter-this.sideC))).toFixed(3));
    }
    
}

function getTriangle(sideA, sideB, sideC) {
    let textError = "Ошибка! Треугольник не существует"
    try {
        return trig = new Triangle(sideA, sideB, sideC);
    } catch {
        return {
            getArea() {
                return textError;
            },
            getPerimeter() {
                return textError;
            }
        }
    }
}
