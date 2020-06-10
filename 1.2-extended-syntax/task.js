function getResult(a, b, c) {
    let D = Math.pow(b, 2) - (4 * a * c);
    let x = [];
    if (D > 0) {
        let firstValue = (-b + Math.sqrt(D)) / (2 * a);
        let secondValue = (-b - Math.sqrt(D)) / (2 * a);
        x = [firstValue, secondValue];
        return x;
    } else if (D === 0) {
        let valueZero = -b / (2 * a);
        x = valueZero;
        return x;
    } else {
        return x;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}