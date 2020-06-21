String.prototype.isPalindrome = function() {
    let thisLow = this.toLowerCase().replace(/\s/g, '');
    return thisLow === thisLow.split('').reverse().join('');
}


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sum = 0;
    for (let i = 0; i < marks.length; ++i) {
        sum += marks[i];
        average = sum / marks.length;
    }
    let roundedAverage = Math.ceil(average);

    return averageMark = roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = new Date();
    let happyBirthday = new Date(birthday);
    let diff = Math.floor(now.getTime() - happyBirthday.getTime());
    let age = Math.floor(diff / 31536000000);
    console.log(age);

    return result = age > 18;
}