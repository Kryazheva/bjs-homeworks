function getResult(a, b, c) {
    let D = Math.pow(b, 2) - (4 * a * c);
    let x = [];
    if (D > 0) {
        let firstValue = (-b + Math.sqrt(D)) / (2 * a);
        let secondValue = (-b - Math.sqrt(D)) / (2 * a);
        x = [firstValue, secondValue];

    } else if (D === 0) {
        let valueZero = -b / (2 * a);
        x = valueZero;

    } else {
        x;
    }

    return x;
}

function getAverageMark(marks) {

    if (marks.length === 0) {
        return marks;
    }

    if (marks.length > 5) {
        marks = marks.splice(0, 5);
        console.log('Вы ввели больше пяти оценок')
    }

    let sum = 0;
    for (let i = 0; i < marks.length; ++i) {
        sum += marks[i];
    }

    let averageMark = sum / marks.length;


    return Math.floor(averageMark);

}

function askDrink(name, dateOfBirthday) {
    let year = new Date().getFullYear();
    let averageYear = year - dateOfBirthday.getFullYear();
    if (averageYear > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    };
    if (averageYear < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    };

    return result;
}