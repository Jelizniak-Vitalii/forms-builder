import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './formLogIn.component.html',
  styleUrls: ['../form.component.scss']
})

@Injectable({ providedIn: 'root' })

export class FormLogInComponent implements OnInit {

  form: any = FormGroup;
  status: boolean = true;
  
  private dataObsevable = new BehaviorSubject<boolean>(this.status);
  data = this.dataObsevable.asObservable()

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router
        ){}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: '',
            password: ''
        });    
    }

    login(){
      this.dataObsevable.next(!this.status)
    }
 
    logOut(){
      localStorage.removeItem('currentUser');
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