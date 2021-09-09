import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  public serverId = 10;
  public serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getVal() {
    return this.serverId;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
