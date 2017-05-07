import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'quote-form',
	templateUrl: 'quote.component.html'
})

export class QuoteComponent {
	brands: Array<string>;
	constructor() {
		this.brands=['Audi', 'BMW', 'Porsche']

	}
}
