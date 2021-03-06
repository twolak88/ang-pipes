import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(2021, 1, 20)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2021, 1, 1)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2021, 0, 22)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(2020, 11, 12)
    }
  ];
  filteredStatus: string = '';
  filteredObjects = [];
  sortObjects = [];
  defaultFilteredObject: string = 'all';
  defaultSortObject: String = 'name';
  appStatus = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        resolve('stable');
      }, 2000);
    }
  );

  ngOnInit(): void {
    this.filteredObjects = Object.keys(this.servers[0]);
    this.filteredObjects.splice(this.filteredObjects.indexOf('started'), 1);
    this.filteredObjects.push('all');
    this.sortObjects = Object.keys(this.servers[0]);
  }

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'Test server',
      status: 'stable',
      started: new Date(2020, 10, 20)
    });
  }
}
