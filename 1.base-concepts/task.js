"use strict";

function solveEquation(a, b, c) {
  let arr;
  let d = [];
  let x1;
  let x2;

  d = b**2-4*a*c;

  if(d < 0) { arr = [] }
  else if ( d > 0) {
    x1 = (-b + Math.sqrt(d) )/(2 * a);
    x2 = (-b - Math.sqrt(d) )/(2 * a);
    arr = [x1, x2]
  }
  else if ( d === 0) {
    x1 = -b / (2 * a)
    arr = [x1]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (!isNaN(parseInt(percent)) && parseInt(percent) > 0) {  
    percent = +percent;
  } else {
      return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (!isNaN(parseInt(contribution)) || 0 && parseInt(contribution) >= 0) {  
    contribution = +contribution;
  } else {
      return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`); 
  }

  if (!isNaN(parseInt(amount)) && parseInt(amount) > 0) {  
    amount = +amount;
  } else {
      return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`); 
  }

  let bodyCredit = amount - contribution;

  let dateFrom  = new Date();
  let dateTo = date;

  let monthDiff = dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))

  let payment = bodyCredit * (percent / 1200 + (percent / 1200 / (((1 +  percent / 1200) ** monthDiff) - 1)));
  let totalPayment = (payment * monthDiff).toFixed(2);
  
  return parseFloat(totalPayment);
}
