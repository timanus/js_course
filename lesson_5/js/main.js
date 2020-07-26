'use srtict';

/*-----------------------------------Переменные-------------------------------------*/

let money, time, necessaryExpences, cost;  

// Поля с результатами
let start = document.getElementById('start');
let budgetValue = document.querySelector('.budget-value');
let dayBudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expencesValue = document.querySelector('.expences-value');
let optExpencesValue = document.querySelector('.optexpences-value');
let incomeValue = document.querySelector('.income-value');
let monthSavingsValue = document.querySelector('.monthsavings-value');
let yearSavingsValue = document.querySelector('.yearsavings-value');

// Поля расходов и доходов
let expencesItem = document.querySelectorAll('.expences-item');
let optExpencesItem = document.querySelectorAll('.optionalexpences-item');
let chooseIncomeItem = document.querySelector('.choose-income');
let checkbox = document.querySelector('#savings');
let chooseSumItem = document.querySelector('.choose-sum');
let choosePercentItem = document.querySelector('.choose-percent');

let year = document.querySelector('year-value');
let month = document.querySelector('month-value');
let day = document.querySelector('day-value');

// Кнопки
let countExpButton = (document.getElementsByTagName('button')[0]);
let countOptExpButton = (document.getElementsByTagName('button')[1]);


do {
	money = +prompt('Ваш бюджет на месяц?', '');
} while (isNaN(money || money == null || money == ''));

time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	timeData: time,
	expences: {},
	optionalExpences: {},
	income: [],
	savings: true,
	detectDayBudget: function() {
		alert(`Бюджет на один день: ${(appData.budget / 30).toFixed(2)}`);
	},
	detectLevel: function() {
		let dayBudget = (appData.budget / 30).toFixed();
		switch (true) {
			case dayBudget < 100:
				console.log('Низкий уровень достатка');
				break;
			case dayBudget < 1600:
				console.log('Средний уровень достатка');
				break;
			case dayBudget >= 1600:
				console.log('Высокий уровень достатка');
				break;
		}
	},
	chooseExpences: function() {
		for (let i = 0; i < 2; i++) {

			necessaryExpences = prompt('Введите обязательную статью расходов в этом месяце', '');
		
			while ( necessaryExpences == null || necessaryExpences == '') {
				necessaryExpences = prompt('Введите обязательную статью расходов в этом месяце', '');
			}
		
			cost = prompt('Во сколько обойдется?', '');
		
			while (cost == null || cost == '') {
				cost = prompt('Во сколько обойдется?', '');
			}
			appData.expences[necessaryExpences] = cost;
		
		}
	},
	chooseOptExpences: function() {
		for (let i = 1; i < 4; i++) {
			do {
				expences = +prompt('Статья необязательных расходов?', '');
			} while (isNaN(expences) || expences == null || expences == '');
			appData.optionalExpences[i] = expences;
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?', ''),
				 percent = +prompt('Под какой процент?', '');
			appData.monthIncome = (save/100/12*percent).toFixed();
			alert('Доход в месяц с вашего депозита: ', + appData.monthIncome);
		}
	},
	chooseIncome: function() {
		let items;
		do {
			items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		} while (typeof(items) != 'string' || items == null || items == '');
		appData.income = items.split(', ');
		appData.income.push(prompt('Может что-то еще?', ''));
		appData.income.sort();
	}
};

appData.chooseIncome();

let allOptions = '';
appData.income.forEach(function(item, i, array) {
	allOptions += item + ', ';
});
alert('Способы доп. заработка: ' + allOptions);

console.log('Наша программа включает в себя данные:');

for (let prop in appData) {
	console.log(prop);
}


														/*-----------------Цикл while------------------*/

// let i = 0;
// while (i < 2) {

// 	necessaryExpences = prompt('Введите обязательную статью расходов в этом месяце', '');

// 	while ( necessaryExpences == null || necessaryExpences == '') {
// 		necessaryExpences = prompt('Введите обязательную статью расходов в этом месяце', '');
// 	}

// 	cost = prompt('Во сколько обойдется?', '');

// 	while (cost == null || cost == '') {
// 		cost = prompt('Во сколько обойдется?', '');
// 	}
// 	appData.expences[necessaryExpences] = cost;

// 	i++;
// }

													/*------------------Цикл do while-------------------*/

// let i = 0;
// do {

// 	necessaryExpences = prompt('Введите обязательную статью расходов в этом месяце', '');

// 	while ( necessaryExpences == null || necessaryExpences == '') {
// 		necessaryExpences = prompt('Введите обязательную статью расходов в этом месяце', '');
// 	}

// 	cost = prompt('Во сколько обойдется?', '');

// 	while (cost == null || cost == '') {
// 		cost = prompt('Во сколько обойдется?', '');
// 	}
// 	appData.expences[necessaryExpences] = cost;
// 	i++;
// } while (i < 2);











