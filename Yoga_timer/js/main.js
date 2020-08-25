window.addEventListener('DOMContentLoaded', function() {
	// Переменные
	let infoHeader = document.querySelector('.info-header'),
			infoHeaderItem = document.querySelectorAll('.info-header-tab'),
			infoTabContent = document.querySelectorAll('.info-tabcontent');

	// РАБОТА ТАБОВ
	
	// "Прячет" все элементы контента, начиная с того, который
	// имеет номер на 1 больше, чем переданный параметр
	function hideTabElements(i) {
		for (i; i < infoTabContent.length; i++) {
			infoTabContent[i].classList.remove('show');
			infoTabContent[i].classList.add('hide');
		}
	}
	hideTabElements(1); // "Спрячет" все, кроме 1го

	// Показывает "спрятанный" элемент по номеру в соответствии с параметром
	function showTabElement(i) {
		infoTabContent[i].classList.remove('hide');
		infoTabContent[i].classList.add('show');
	}

	infoHeader.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < infoHeaderItem.length; i++) {
				if (infoHeaderItem[i] == target) {
					hideTabElements(0);
					showTabElement(i);
				}
			}
		}
	});

	// ТАЙМЕР

	let deadline = '2020-09-16';

	function getTimeRemaining(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor(t/(1000*60*60));
		
		return {
			'total': t,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours
		};
	}

	function setClock(id, endTime) {
		const timer = document.getElementById(id),
			  hours = timer.querySelector('.hours'),
			  minutes = timer.querySelector('.minutes'),
			  seconds = timer.querySelector('.seconds'),
			  timeInterval = setInterval(updateClock, 1000);
		
		function updateClock() {
			let t = getTimeRemaining(endTime);
			hours.textContent = t.hours;
			if (t.minutes < 10) {
				minutes.textContent = '0' + t.minutes;
			} else {
				minutes.textContent = t.minutes;
			}

			if (t.seconds < 10) {
				seconds.textContent = '0' + t.seconds;
			} else {
				seconds.textContent = t.seconds;
			}
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('timer', deadline);


});