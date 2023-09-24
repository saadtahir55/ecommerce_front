import { Injectable, Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from './http.service';
import { AngularServiceInjector } from '../class/angular-service-injector';

@Injectable({
  providedIn: 'root'
})
export class FormService extends AngularServiceInjector {
  form: FormGroup;

  constructor(injector: Injector) { 
    super(injector);
    this.form = this.fb.group({});
  }
  
}
