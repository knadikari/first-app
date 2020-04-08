import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name = 'sdf';
  ServerName = 'Appolo';
  ServerPid = 11;
  ServerStatus = 'Offline';
  StausFlag = true;
  buttonState = true;
  constructor() {
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }
  toggleServerStaus() {
    if (this.StausFlag === true) {
      this.ServerStatus = 'Online';
      this.StausFlag = false;
    } else {
      this.ServerStatus = 'Offline'
      this.StausFlag = true;
    }
    return this.ServerStatus;
  }
}
