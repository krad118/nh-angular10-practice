import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent {
  @Input() book;

}
