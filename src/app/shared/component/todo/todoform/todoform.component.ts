import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/shared/module/data.interface';
import { TodoService } from 'src/app/shared/service/todo.service';
import { UuidserviceService } from 'src/app/shared/service/uuidservice.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  constructor(
    private _todoService : TodoService,
    private _UuidserviceService : UuidserviceService
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('todoItem') todoItemRef !: NgForm

  onTodoAdd(){
      if (this.todoItemRef.valid) {
          let todo : Itodo = {...this.todoItemRef.value, id:this._UuidserviceService.uuid()}
          this.todoItemRef.reset()
          this._todoService.createNewTodo(todo);
      }
  }
}