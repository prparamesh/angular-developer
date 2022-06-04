import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  /*
  template: `
  <input type="text" [(ngModel)]="username" />
  <input type="button" (click)="test()" value="submit" />
  `,
  */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = null;
  test() {
    console.log(this.username);
  }
}
