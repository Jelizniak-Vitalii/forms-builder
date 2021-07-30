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
  currentUser: boolean;
  notifier = new Subject();

  constructor(
    private router: Router,
    private serviceCurrentUser: ServiceAuthentication,
  ){}

  ngOnInit(): void {
    this.serviceCurrentUser.data$
      .pipe(takeUntil(this.notifier))
      .subscribe((x: any) => {
      this.currentUser = x;
    })
    if (localStorage.getItem('currentUser') != null) {
      this.currentUser = true;
    }
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    this.serviceCurrentUser.emitData(!this.currentUser);
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }
}
