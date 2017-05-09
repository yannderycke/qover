import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GuardService } from './shared/guard.service';
import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from './shared/quote.service'
import { AuthModule } from './authentication/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthModule,
    RouterModule.forRoot([
      { path: 'quote', canActivate: [GuardService], component: QuoteComponent }
    ]),
  ],
  providers: [QuoteService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
