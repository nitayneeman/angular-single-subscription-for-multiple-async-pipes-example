import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public users$: Rx.Observable<any>;

  ngOnInit() {
    this.users$ = Rx.Observable.of([
      { id: 1111, name: 'User 1', email: 'u1@dummy.com' },
      { id: 2222, name: 'User 2', email: 'u2@dummy.com' },
      { id: 3333, name: 'User 3', email: 'u3@dummy.com' }
    ])
      .do(() => console.info('Subscription is created'));
  }
}
