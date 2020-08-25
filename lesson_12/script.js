class Options {
	constructor (height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	add() {
		const elem = document.createElement('div');
		elem.style.height = this.height
		elem.style.width = this.width;
		elem.style.background = this.bg;
		elem.style.fontSize = this.fontSize;
		elem.style.textAlign = this.textAlign;
		elem.textContent = 'Hello';
		document.body.appendChild(elem);
	}
}

const block = new Options('100px', '100px', 'red', '20px', 'center');
block.add();
console.log(block);