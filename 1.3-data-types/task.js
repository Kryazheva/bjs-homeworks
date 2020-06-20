function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    /* 
     contribution сумма первоночального взноса
     amount сумма кредита
     percent - процентная ставка
     date срок погашения
    */
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
        console.log('Проверьте значениия введенных данных', percent, 'или', contribution, 'или', amount);
        return;
    }
    let principleDebt = amount - contribution; // сумма основного долга
    let interestRate = (percent / 100) / 12; // процентная ставка по кредиту
    let sumMonth = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()); // кол-во выплачиваемых месяцев
    let amountPerMonth = principleDebt * (interestRate + interestRate / (((1 + interestRate) ** sumMonth) - 1));
    let totalAmount = parseFloat((amountPerMonth * sumMonth).toFixed(2));
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (!name) {
        console.log(`Привет, мир! Меня зовут, Аноним`);
    }
    return (`Привет, мир! Меня зовут, ${name || "Аноним"}`);
}
// console.log(getGreeting(name));