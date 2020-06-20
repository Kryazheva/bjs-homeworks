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
    console.log(`Вычисляем корни квадратного уравнения ${a}x*2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D > 0) {
        return (`Уравнение имеет два корня x1 = ${result.root[0]}, x2 = ${result.root[1]}`);
    } else if (result.D == 0) {
        return (`Уравнение имеет один корень x1 = ${result.root[0]}`);
    } else if (result.D < 0) {
        return (`Уравнение не имеет вещественных корней`);
    }
}
//console.log(getSolution(1, 2, 1));
console.log(showSolutionsMessage(2, 4, 2));

let inputData = {
    algebra: [4, 5, 5, 4],
    geometry: [2, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 5],
    english: [4, 4, 3, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
};

function getAverageScore(data) {
    let totalSum = 0;
    let totalPro = 0;
    for (let pro in data) {
        let value = getAverageMark(data[pro]);
        // console.log(`${data[pro]}`);
        totalSum += value;
        totalPro += 1;

        console.log(`${pro} : ${data[pro]}`);

    }
    let average = totalSum / totalPro;


    return { pro: data[pro] };
}
getAverageScore(inputData);

function getAverageMark(marks) {

    if (marks.length === 0) {
        return marks;
    }
    if (marks.length > 10) {
        marks = marks.splice(0, 10);
        console.log('Вы ввели больше пяти оценок')
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}
getAverageScore(inputData);

const arraySecret = { aaa: 0, bbb: 1 }

function getPersonData(secretData) {

    let firstName = 0;
    let lastName = 1;
    firstName = getDecodedValue(firstName);
    lastName = getDecodedValue(lastName);
    secretData = { firstName, lastName };
    return { firstName, lastName };
}
console.log(getPersonData(arraySecret));

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Emilio';
    } else {
        return 'Radrigo';
    }
}