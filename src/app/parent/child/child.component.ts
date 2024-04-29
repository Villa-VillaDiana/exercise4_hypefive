import { Component, Input } from '@angular/core';
// import { book_library } from '../parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() book;
}
