import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('size') size: string = 'sm';
  @Input('image') image: string = 'https://shorturl.at/uzPY6';
  @Input('title') title: string = 'Insurance Product';

  constructor() { }

  ngOnInit(): void {
  }

}
