import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './formRegistration.component.html',
  styleUrls: ['./formRegistration.component.scss']
})
export class FormRegistrationComponent implements OnInit, OnDestroy {
    form: FormGroup;
    authentication: any;

    constructor(
        private http: HttpClient,
        private router: Router
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
      if(this.form.valid){
        this.authentication = this.http.post('http://localhost:3000/user/post', this.form.value)
          .subscribe(()=> this.router.navigate(['./formLogIn']));
        this.form.reset()
      }
    }

  redirectToLogIn(){
    this.router.navigate(['./formLogIn'])
  }

  ngOnDestroy() {
    if(this.authentication != undefined){
      this.authentication.unsubscribe()
    }
  }
}
