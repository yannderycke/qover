import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class QuoteService {
    url: string = 'http://localhost:3000'
    private subject = new Subject<any>();
    headers;

    constructor(private http: Http) {
        let token = localStorage.getItem('token')
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('token', token);
     }

    getQuote(data) {
        console.log(" this.headers ",  this.headers);
        return this.http.post(this.url + '/quote', data, { headers: this.headers }).map(response => response.json())
    }


}

