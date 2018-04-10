class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height, 
		this.width = width, 
		this.bg = bg, 
		this.fontSize = fontSize, 
		this.textAlign = textAlign;
	}

	createElem() {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		elem.innerHTML = prompt('Введи волшебное слово', '');
		elem.style.cssText =   `height: ${this.height}; \
								width: ${this.width}; \
								background: ${this.bg}; \
								font-size: ${this.fontSize}; \
								text-align: ${this.textAlign}; \
							   `;

	}
}

const item = new Options('200px', '250px', '#DEF2F1', '35px', 'center');
item.createElem();
// const item_1 = new Options('200px', '250px', '#DEF2F1', '35px', 'center');
// item_1.createElem();


