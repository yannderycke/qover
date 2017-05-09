import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable()

export class GuardService implements CanActivate {
    constructor() {
       
    }
    canActivate(): boolean {
        let logged = localStorage.getItem('token');

        if (logged) {
            
            return true;
        }
    }
}
