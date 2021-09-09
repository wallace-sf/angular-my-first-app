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
  public serverName = 'Testing';
  public userName = '';
  public isServerCreated = false;
  public servers = ['Testserver', 'Testserver 2'];
  public isPasswordListEnabled = false;
  public passwords = [];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
  }

  onInputServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.userName = '';
  }

  onTogglePasswordList() {
    this.isPasswordListEnabled = !this.isPasswordListEnabled;
    this.passwords.push(this.passwords.length + 1);
  }
}
