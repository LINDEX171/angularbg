import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burger-app';

  constructor(public router: Router) {}

  isSpecialPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/burger' || this.router.url === '/signup' || this.router.url === '/burger1' || this.router.url === '/nav';
  }

}
