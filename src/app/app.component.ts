import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
    email: 'douglascri@yahoo.com.br',
    role: 'admin',

  }

  title = 'curso-Angular';
}
