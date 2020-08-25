const inputRub = document.querySelector('.rub'),
	  inputUsd = document.querySelector('.usd');

inputRub.addEventListener('input', () => {
	let request = new XMLHttpRequest();
	request.open('GET', 'current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			let data = JSON.parse(request.response);

			inputUsd.value = inputRub.value / data.usd;
		} else {
			inputUsd.value = 'error';
		}
	});
});