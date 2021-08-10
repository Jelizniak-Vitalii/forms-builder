import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import {  ServiceAuthentication } from '../shared/services/serviceAuthentication';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsLogged: boolean;
  destroySubscribe = new Subject();

  constructor(
    private router: Router,
    private serviceCurrentUser: ServiceAuthentication,
  ){}

  ngOnInit(): void {
    this.serviceCurrentUser.data$
    .pipe(takeUntil(this.destroySubscribe))
    .subscribe((userIsLogged: any) => {
    this.userIsLogged = userIsLogged;
    })
    if (localStorage.getItem('userIsLogged') != null) {
      this.userIsLogged = true;
    }
  }

  logOut(): void {
    localStorage.removeItem('userIsLogged');
    this.serviceCurrentUser.emitData(!this.userIsLogged);
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.destroySubscribe.next();
    this.destroySubscribe.complete();
  }
}
