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

alert(`Бюджет на один день: ${(appData.budget / 30).toFixed(2)}`);


