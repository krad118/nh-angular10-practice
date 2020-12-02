import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent implements OnChanges, OnInit, OnDestroy {
  @Input() book;

  constructor() {
    console.log(`life cycle Angular: contructor`);
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log(`life cycle Angular: ngOnChanges ${change}`);
  }

  ngOnInit(): void {
    console.log(`life cycle Angular: ngOnInit`);
  }

  ngOnDestroy(): void {
    console.log(`life cycle Angular: ngOnDestroy`);
  }
}
