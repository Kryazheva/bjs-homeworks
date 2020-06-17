"use strict";

function getSolution(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let root = [];
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        root = [x1, x2];
    } else if (D == 0) {
        let x1 = -b / (2 * a);
        root = [x1];

    } else {
        root;
    }

    return { D, root };
}



function showSolutionsMessage(a, b, c) {
    let result = getSolution(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a} ' * x ** 2 + ' ${b} '* x + ' ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D && result.root[0, 1]) {
        return (`Уравнение имеет два корня ${result.root[0]} ${result.root[1]}`);
    } else if (result.D && result.root[0]) {
        return (`Уравнение имеет один корень ${result.root[0]}`);
    } else if (result.D && result.root) {
        return (`Уравнение не имеет вещественных корней`);
    }
}
//console.log(getSolution(1, 2, 1));
console.log(showSolutionsMessage(2, 4, 2));