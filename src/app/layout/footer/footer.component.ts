import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  tabs: any = ['Travel', 'Health', 'CASCO', 'Mortgage', 'Fire']

  services: any = [
    {
      name: 'Insurance Services',
      list: ['Medical Expenses', 'Family health insurance', 'Vehicle damage', 'Property tax']
    },
    {
      name: 'Company',
      list: ['About us', 'Career', 'Help', 'FAQ', 'Blog']
    },
    {
      name: 'Bonus',
      list: ['Gift certificate', 'Affiliate Program', 'Trainings']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
