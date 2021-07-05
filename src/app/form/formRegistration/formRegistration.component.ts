import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './formRegistration.component.html',
  styleUrls: ['../form.component.scss']
})
export class FormRegistrationComponent implements OnInit {
    form: any = FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router
        ){
        

        }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: '',
            password: ''
        });
    }
    submit(): void {
        this.http.post("http://localhost:3000/user/post", this.form.getRawValue())
        .subscribe(()=> this.router.navigate(['./formLogIn']));
    }

}