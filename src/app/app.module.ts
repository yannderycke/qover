import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteComponent} from './quote/quote.component'
import { AuthModule } from './authentication/auth.module'

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    RouterModule.forRoot([
				{ path: 'quote', component: QuoteComponent }
			]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
