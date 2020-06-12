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
    let sum = 0;
    if (marks.length > 5) {
        let cutMarks = marks.splice(0, 5);
        marks = cutMarks;
        console.log('У вас больше пяти оценок,ваш средний бал', averageMark);
        for (let i = 0; i <= marks.length; ++i) {
            sum += marks[i];
        }
        return averageMark = sum / marks.length;
    } else if (marks.length <= 5) {
        for (let i = 0; i <= marks.length; ++i) {
            sum += marks[i];
        }
        return averageMark = sum / marks.length;
    }








}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}