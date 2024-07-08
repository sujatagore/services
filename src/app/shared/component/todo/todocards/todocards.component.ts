import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/module/data.interface';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todocards',
  templateUrl: './todocards.component.html',
  styleUrls: ['./todocards.component.scss']
})
export class TodocardsComponent implements OnInit {

  todoArray !: Array<Itodo>
 
  constructor(
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
    this.todoArray = this._todoService.fetchAllTodo()
  }

  // onEdit(id : string){
  //   this._todoService.editTodo(id)
  // }

  onRemove(id : string){
    this._todoService.removeTodo(id)
  }

}
