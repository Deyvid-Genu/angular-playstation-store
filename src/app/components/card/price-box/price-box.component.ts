import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-box',
  templateUrl: './price-box.component.html',
  styleUrls: ['./price-box.component.css'],
})
export class PriceBoxComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  console: string = '';

  @Input()
  price: string = '';

  constructor() {}

  ngOnInit(): void {}
}
