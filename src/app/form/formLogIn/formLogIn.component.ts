import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  ServiceAuthentication } from '../../shared/services/serviceAuthentication';

@Component({
  selector: 'app-form',
  templateUrl: './formLogIn.component.html',
  styleUrls: ['./formLogIn.component.scss']
})

export class FormLogInComponent implements OnInit, OnDestroy {

  form: FormGroup;
  correctData: boolean;
  currentUser: boolean;
  authentication: any;

    constructor(
        private http: HttpClient,
        private serviceCurrentUser: ServiceAuthentication,
        private router: Router
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
        this.authentication = this.http.post('http://localhost:3000/user/get', this.form.value,
        ).subscribe((el) => {
          if (el) {
            this.router.navigate(['./portal'])
            localStorage.setItem('currentUser', JSON.stringify(el));
            this.serviceCurrentUser.emitdata(!this.currentUser);
          } else {
            this.correctData = true;
            this.form.reset()
          }
        })
      }
    }

  redirectToRegistration() {
    return this.router.navigate(['./formRegistration'])
  }

  ngOnDestroy(): void {
      if (this.authentication != undefined) {
        this.authentication.unsubscribe()
      }
  }
}
