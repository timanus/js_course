'use srtict';

/*-----------------------------------Переменные-------------------------------------*/

let money, time; 

// Поля с результатами
let start = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

// Поля расходов и доходов
    expensesItem = document.querySelectorAll('.expenses-item'),
    optExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncomeItem = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    chooseSumItem = document.querySelector('.choose-sum'),
    choosePercentItem = document.querySelector('.choose-percent'),

    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
// Кнопки
	 	countExpButton = (document.getElementsByTagName('button')[0]),
	 	countOptExpButton = (document.getElementsByTagName('button')[1]),
	 	countDayBudget = (document.getElementsByTagName('button')[2]),
		allButtons = document.querySelectorAll('button');



start.addEventListener('click', function() {    // Только после нажатия этой кнопки остальные кнопки "начинают работать"
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt('Ваш бюджет на месяц?', '');
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();

  countExpButton.addEventListener('click', function() {
		let sum = 0;
	
		for (let i = 0; i < expensesItem.length; i++) {
			let a = expensesItem[i].value,
					b = expensesItem[++i].value;
	
			if ((typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
				appData.expenses[a] = b;
				sum += +b;
			} else {
				--i;
			}
		}
		expensesValue.textContent = sum;
	});
	
	countOptExpButton.addEventListener('click', function() {
		for (let i = 0; i < optExpensesItem.length; i++) {
			let opt = optExpensesItem[i].value;
			appData.optionalExpenses[i] = opt;
			optExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
		}
	});
	
	countDayBudget.addEventListener('click', function() {
		if (appData.budget != undefined) {
			appData.moneyPerDay = (appData.budget / 30).toFixed();
			dayBudgetValue.textContent = appData.moneyPerDay;
	
			let dayBudget = (appData.moneyPerDay);
			switch (true) {
				case dayBudget < 100:
					levelValue.textContent = 'Минимальный уровень дохода';
					break;
				case dayBudget < 1600:
					levelValue.textContent = 'Средний уровень дохода';
					break;
				case dayBudget >= 1600:
					levelValue.textContent = 'Высокий уровень дохода';
					break;
				default:
					levelValue.textContent = 'Произошла ошибка';
					break;
			}
		} else {
			dayBudgetValue.textContent ='Произошла ошибка';
		}
	});
	
	chooseIncomeItem.addEventListener('input', function() {
		incomeValue.textContent = chooseIncomeItem.value;
		appData.income = chooseIncomeItem.value.split(', ');
		appData.income.sort();
	});
	
	checkbox.addEventListener('click', function() {
		appData.savings == true ? appData.savings = false : appData.savings = true;
	});
	
	function countSavings() {
		if (appData.savings == true &&
				!isNaN(chooseSumItem.value) && 
				!isNaN(choosePercentItem.value) &&
				chooseSumItem.value != '' && 
				choosePercentItem.value != '') {
			let sum = +chooseSumItem.value,
					percent = +choosePercentItem.value;
			yearSavingsValue.textContent = (sum / 100 * percent).toFixed(1);
			monthSavingsValue.textContent = (yearSavingsValue.textContent / 12).toFixed(1);
			appData.monthSavings = monthSavingsValue.textContent;	
			appData.yearSavings = yearSavingsValue.textContent;	
		}
	}
	chooseSumItem.addEventListener('input', countSavings);
	choosePercentItem.addEventListener('input', countSavings);

});




let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};











