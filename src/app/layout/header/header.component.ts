import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus: any = [
    { name: 'Home' },
    { 
      name: 'Services',
      submenu: [
        { name: 'Service 1' },
        { name: 'Service 2' },
        { name: 'Service 3' },
        { name: 'Service 4' },
        { name: 'Service 5' },
      ]
    },
    { name: 'About us' },
    { name: 'Blog' },
    { name: 'Career' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
