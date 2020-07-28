window.addEventListener('DOMContentLoaded', function() {
	// Переменные
	let infoHeader = document.querySelector('.info-header'),
			infoHeaderItem = document.querySelectorAll('.info-header-tab'),
			infoTabContent = document.querySelectorAll('.info-tabcontent'),

			sliderItem = document.querySelectorAll('.slider-item');
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

	// РАБОТА СЛАЙДЕРА

	function hideSliderElements(i) {
		for (i; i < sliderItem.length; i++) {
			sliderItem[i].classList.remove('show');
			sliderItem[i].classList.add('hide');
		}
	}
	// hideSliderElements(1);
});