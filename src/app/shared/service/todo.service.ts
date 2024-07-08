import { Injectable } from "@angular/core"
import { Itodo } from "../module/data.interface"
import { SnackBarMsgService } from "./snack-bar-msg.service"


@Injectable({
    providedIn : 'root'
})

export class TodoService{
    todoArray : Array<Itodo> = [
        {
          todo : 'html',
          id : '123'
        },
        {
            todo : 'angular',
            id : '255'
        },
        {
            todo : 'js',
            id : '14534543'
        }
      ]

    constructor(
        private _snackBarservices : SnackBarMsgService
    ){}

    fetchAllTodo(): Itodo[] {
        //API call get data from database
        return this.todoArray
    }

    createNewTodo(newTodo : Itodo){
        console.log(newTodo)
        this.todoArray.push(newTodo)
        this._snackBarservices.openSnackBar(`New Todo Item is Added Successfully!!!`)
    }

    // editTodo(id :string){
    //     let getTodoEdit = this.todoArray.findIndex(tod => tod.id === id);
    //     console.log(getTodoEdit)
    //     this._snackBarservices.openSnackBar(`Todo Item is Updated Successfully!!!`)
    // }

    removeTodo(id : string){
        let getTodoRemove = this.todoArray.findIndex(to =>to.id === id);
        this.todoArray.splice(getTodoRemove, 1);
        this._snackBarservices.openSnackBar(`Todo Item is Removed Successfully!!!`)
    }
}