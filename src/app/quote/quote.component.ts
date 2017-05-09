import { UserService } from '../shared/user.service';
import { QuoteService } from '../shared/quote.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
	selector: 'quote-form',
	templateUrl: 'quote.component.html'
})

export class QuoteComponent {
	brands: Array<Object>;
	quote: any;
	quoteForm: any;
	public loginForm = this.fb.group({
		value: ["", Validators.required],
		password: ["", Validators.required]
	});
	showSuccess;
	showError;
	priceFormat;
	constructor(private quoteService: QuoteService, private fb: FormBuilder, private UserService: UserService) {


		this.quote = {
		}
		this.brands = [
			{
				name: 'Audi',
				price: 250,
				percentage: 0.03
			},
			{
				name: 'BMW',
				price: 150,
				percentage: 0.04
			},
			{
				name: 'Porsche',
				price: 500,
				percentage: 0.07
			}
		]

		this.quoteForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
			brand: new FormControl('', [Validators.required]),
			value: new FormControl('', [Validators.required, this.valueValidator])
		});
	}
	valueValidator(form) {
		if (form.value && isNaN(form.value)) {
			return { 'stringError': 'Only numbers accepted' }
		}
		if (form.value && (form.value < 5000 || form.value > 75000)) {
			return { 'valueError': ' The value of the car must be above 5.000 € or below 75.000 € ' }
		} else {
			return null
		}
	}
	getQuote() {
		let total = this.quote.brand.price + (this.quote.brand.percentage * this.quote.value);
		this.priceFormat = total.toLocaleString('en')
		this.quote.price =  total;
			this.quoteService.getQuote(this.quote).subscribe(
				data => { console.log(data); this.showSuccess = true; },
				err => { console.log(err); this.showError = true; },
				() => console.log('Login')
			);
	}
}
