import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    url: string = 'http://localhost:3000'
    private subject = new Subject<any>();

    constructor(private http: Http) { }


    login(data) {

        return this.http.post(this.url + '/auth/login', data).map(response => response.json())
    }


}

