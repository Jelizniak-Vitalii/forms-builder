import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  ServiceAuthentication } from '../../shared/services/serviceAuthentication'


@Component({
  selector: 'app-form',
  templateUrl: './formLogIn.component.html',
  styleUrls: ['../form.component.scss']
})



export class FormLogInComponent implements OnInit {

  form: any = FormGroup;
  currentUser: boolean = false;
  
  


    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private serviceCurrentUser: ServiceAuthentication
        ){}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: '',
            password: ''
        });     
    }

    login(){
      this.serviceCurrentUser.emitdata(!this.currentUser)
      
    }
    
 
    

    submit(): void {
      this.http.post("http://localhost:3000/user/get", this.form.getRawValue(),
      ).subscribe((el)=> {
        if (el){
          this.router.navigate(['./portal'])
          localStorage.setItem('currentUser', JSON.stringify(el));
          this.login()
        }
        else{
          console.log('Неверный логин пароль')
        }
      })      
  }

}