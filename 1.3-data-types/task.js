function calculateTotalMortgage(percent, contribution, amount, date) {
    /* 
     contribution сумма первоночального взноса
     amount сумма кредита
     percent - процентная ставка
     date срок погашения
    */
    let principleDebt = amout - contribution; // сумма основного долга
    let interestRate = percent / 100; // процентная ставка по кредиту
    let sumMonth = date.getMonth() - new Date.getMonth(); // кол-во выплачиваемых месяцев
    let totalAmount = principleDebt * (interestRate + interestRate / (((1 + interestRate) * sumMonth) - 1));
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}