import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public allowNewServer = false;
  public serverCreationStatus = 'No server was created.';
  public serverName = 'Testing';
  public userName = '';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server is created. Name is ${this.serverName}`;
  }

  onInputServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.userName = '';
  }
}
