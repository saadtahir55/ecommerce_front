import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularServiceInjector } from '../class/angular-service-injector';

@Injectable({
    providedIn: 'root'
})

export class HttpService extends AngularServiceInjector {
    readonly http: HttpClient;
    params: any = '';
    postValue: any;
    updateValue: any;

    constructor(injector: Injector) {
        super(injector);
        this.http = injector.get(HttpClient);
    }

    getData(api: string, endpoint: string, params: any = {}): Observable<any> {
        return this.http.get(`${api}${endpoint}`, { params }).pipe(
            catchError(this.handleError)
        );
    }

    // Example: Create a new record
    createRecord(api: string, endpoint: string, data: any): Observable<any> {
        return this.http.post(`${api}${endpoint}`, data).pipe(
            catchError(this.handleError)
        );
    }

    // Example: Update an existing record
    updateRecord(api: string, endpoint: string, data: any): Observable<any> {
        return this.http.put(`${api}${endpoint}`, data).pipe(
            catchError(this.handleError)
        );
    }

    // Example: Delete a record
    deleteRecord(api: string, endpoint: string): Observable<any> {
        return this.http.delete(`${api}${endpoint}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        console.error('An error occurred:', error);
        throw error;
    }
}
