'use srtict';

function parseCount(number) {
    const parseNumber = Number.parseInt(number);
    if (parseNumber === isNaN) {
        const isNuNError = new Error('Невалидное значение');
        throw isNuNError;
    }

    return parseNumber;
}

function validateCount(value) {
    try {
        const resultParse = parseCount(value);
        return resultParse;
    } catch (isNuNError) {
        return isNuNError;
    }

}

class Triangle {
    constructor(a, b, c) {
        this.a = parseInt(a);
        this.b = parseInt(b);
        this.c = parseInt(c);
    }
    getCondition() {
        if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
            const resultCondition = new Error('Треугольник с такими сторонами не существует');
            throw resultCondition;
        }
    }

    getPerimeter(a, b, c) {
        const P = a + b + c;
        console.log(P);
        return parseFloat(P);
    }

    getArea() {
        const halfMetr = P / 2;
        const S = Math.sqrt(halfMetr * (halfMetr - this.a) * (halfMetr - this.b) * (halfMetr - this.c));
        console.log(S);
        return parseFloat(S);
    }

}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
    } catch (err) {
        return triangle.getCondition();
    }
}