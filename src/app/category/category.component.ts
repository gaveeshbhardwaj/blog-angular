import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categories;
  @Output() getCategory = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  getcategory(cat: string) {
    this.getCategory.emit(cat);
  }
}
