import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trash } from 'src/app/models/trash';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-trash-item',
  templateUrl: './trash-item.component.html',
  styleUrls: ['./trash-item.component.css']
})
export class TrashItemComponent implements OnInit {

  @Input() trash : Trash;
  @Output() deleteTrash: EventEmitter<Trash> = new EventEmitter();
  @Output() recoverArticle: EventEmitter<Trash> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteTrash.emit(this.trash);
  }

  onRecover(){
    this.recoverArticle.emit(this.trash);
  }

}
