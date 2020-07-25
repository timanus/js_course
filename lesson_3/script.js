'use srtict';

let money, time, necessaryExpences, cost;  // Объявление переменных

money = +prompt('Ваш бюджет на месяц?', ''); 
time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	timeData: time,
	expences: {},
	optionalExpences: {},
	income: [],
	savings: false
};


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

detectDayBudget();

detectLevel();

chooseOptExpences();



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

function detectDayBudget() {
	alert(`Бюджет на один день: ${(appData.budget / 30).toFixed(2)}`);
}

function detectLevel() {
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
}

function chooseOptExpences() {
	for (let i = 1; i < 4; i++) {
		do {
			expences = +prompt('Статья необязательных расходов?', '');
		} while (isNaN(expences) || expences == null || expences == '');
		appData.optionalExpences[i] = expences;
	}
}










