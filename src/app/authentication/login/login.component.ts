import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../../shared/user.service'

@Component({
	selector: 'login-form',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
	login: string;
	password: string;
	error: boolean;


	constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
		this.login = "contact@qover.me";
	}

	log() {
		let data = {
			login: this.login,
			password: this.password
		}
		this.userService.login(data).subscribe(
			data => { console.log(data); this.router.navigate(['/quote']); },
			err => { console.log(err); this.error = true },
			() => console.log('Login')
		);
	}
}
