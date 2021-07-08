import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import {  ServiceAuthentication } from '../shared/services/serviceAuthentication'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  currentUser: boolean = false;
  

  constructor(
    private router: Router,
    private serviceCurrentUser: ServiceAuthentication
  ){}

  ngOnInit(): void {
    this.serviceCurrentUser.data$.subscribe((x: any) =>{
      this.currentUser = x
    })
    if(localStorage.getItem('currentUser') != null){
      this.currentUser = true;
    }
  }
  
  logOut(){
    localStorage.removeItem('currentUser');
    this.serviceCurrentUser.emitdata(!this.currentUser)
    this.router.navigate(['/'])
  }
}