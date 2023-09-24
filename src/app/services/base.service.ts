import { Injectable, Injector } from '@angular/core';
import { FormService } from './form.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService extends FormService {

  fs: FormService;
  _http: HttpService;

  constructor(injector: Injector){
    super(injector);
    this.fs = injector.get(FormService);
    this._http = injector.get(HttpService);
  }
}
