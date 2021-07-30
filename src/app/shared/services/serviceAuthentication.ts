import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceAuthentication {
  data = new Subject();
  public data$ = this.data.asObservable();

  constructor() { }

  emitData(x: boolean): void {
    this.data.next(x);
  }

}


