
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent} from  './login/login.component';
import { UserService } from '../shared/user.service'


@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		RouterModule.forRoot([
			    { path: 'login', component: LoginComponent },
		])
	],
	declarations: [
		LoginComponent
	],
	exports: [

	],
	providers: [
		UserService
	]
})

export class AuthModule {

}