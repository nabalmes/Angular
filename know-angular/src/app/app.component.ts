import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'know-angular';

  allowNewServer = false
  serverCreationStatus = "No server created!"
  serverName = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.serverCreationStatus = "Server created successfully! Name is " + this.serverName
    console.log("button clicked!");
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
