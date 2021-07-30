import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

import { environment } from '../../../environments/environment';
import { AuthService } from '../../shared/services/authService';

@Component({
  selector: 'app-form',
  templateUrl: './formRegistration.component.html',
  styleUrls: ['./formRegistration.component.scss']
})
export class FormRegistrationComponent implements OnInit, OnDestroy {

    form: FormGroup;
    notifier = new Subject();

    constructor(
        private router: Router,
        private authRegistrationService: AuthService
        ){ }

    ngOnInit(): void {
      this.form = new FormGroup({
        email: new FormControl('',[
          Validators.email,
          Validators.required,
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{5,15}$/)
        ])
      })
    }

    submit(): void {
      if (this.form.valid) {
        this.authRegistrationService.authorization( environment.API_REGISTRATION,this.form.value)
          .pipe(takeUntil(this.notifier))
          .subscribe(()=> this.router.navigate(['./formLogIn']));
        this.form.reset();
      }
    }

  redirectToLogIn(): void{
    this.router.navigate(['./formLogIn']);
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }
}
