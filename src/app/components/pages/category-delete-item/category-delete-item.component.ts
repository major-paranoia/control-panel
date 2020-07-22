import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-delete-item',
  templateUrl: './category-delete-item.component.html',
  styleUrls: ['./category-delete-item.component.css']
})
export class CategoryDeleteItemComponent implements OnInit {

  @Input() category: Category;
  @Output() deleteCategory: EventEmitter<Category> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteCategory.emit(this.category);
  }

}
