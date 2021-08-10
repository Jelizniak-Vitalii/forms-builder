import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/services/authService';
import {  ServiceAuthentication } from 'src/app/shared/services/serviceAuthentication';

@Component({
  selector: 'app-form',
  templateUrl: './formLogIn.component.html',
  styleUrls: ['./formLogIn.component.scss']
})

export class FormLogInComponent implements OnInit, OnDestroy {

  form: FormGroup;
  correctData: boolean;
  userIsLogged: boolean = false;
  destroySubscribe = new Subject();

    constructor(
        private serviceCurrentUser: ServiceAuthentication,
        private router: Router,
        private authLogInService: AuthService
    ){}

    ngOnInit(): void {
        this.form = new FormGroup({
          email: new FormControl('',[
            Validators.email,
            Validators.required
          ]),
          password: new FormControl('',[
            Validators.required,
            Validators.minLength(5)
          ])
        })
    }

    submit(): void {
      if (this.form.valid) {
        this.authLogInService.authorization( environment.API_LOGIN,this.form.value)
        .pipe(takeUntil(this.destroySubscribe))
        .subscribe((el) => {
        if (el) {
          this.router.navigate(['./portal']);
          localStorage.setItem('userIsLogged', JSON.stringify(el));
          this.serviceCurrentUser.emitData(!this.userIsLogged);
        } else {
          this.correctData = true;
          this.form.reset();
        }
      })
      }
    }

  redirectToRegistration(): void {
    this.router.navigate(['./formRegistration']);
  }

  ngOnDestroy(): void {
    this.destroySubscribe.next();
    this.destroySubscribe.complete();
  }
}
