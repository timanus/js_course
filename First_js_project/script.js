'use srtict';

let money, time, necessaryExpences, cost;  // Объявление переменных

money = prompt('Ваш бюджет на месяц?', ''); 
time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	timeData: time,
	expences: {},
	optionalExpences: {},
	income: [],
	savings: false
};

for (let i = 1; i < 3; i++) {
	necessaryExpences = prompt('Введите обязательную статью расходов в этом месяце', '');
	cost = prompt('Во сколько обойдется?', '');
	appData.expences[necessaryExpences] = cost;
}

alert(`Бюджет на один день - ${money/30}`)


