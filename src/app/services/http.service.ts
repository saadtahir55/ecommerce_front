import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

@Component({
    
})
export class HttpService implements OnInit {
    constructor(public http: HttpClient){}
    
    ngOnInit() {
        this.http
    }
}
