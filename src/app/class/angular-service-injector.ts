import { Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export abstract class AngularServiceInjector {
    fb: FormBuilder;
    activeRoute: ActivatedRoute;
    route: Router;

    constructor(public injector: Injector) {
        this.fb = injector.get(FormBuilder);
        this.activeRoute = injector.get(ActivatedRoute);
        this.route = injector.get(Router)
    }
}