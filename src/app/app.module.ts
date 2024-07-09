import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodocardsComponent } from './shared/component/todo/todocards/todocards.component';
import { MaterialModule } from './material/material.module';
import { TodoformComponent } from './shared/component/todo/todoform/todoform.component';
import { TodolistComponent } from './shared/component/todo/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { ProductdashboardComponent } from './shared/component/product/productdashboard/productdashboard.component';
import { ProductcardComponent } from './shared/component/product/productcard/productcard.component';
import { ProductformComponent } from './shared/component/product/productform/productform.component';
import { StdFormComponent } from './shared/component/StdForm/std-form/std-form.component';
import { StdTableComponent } from './shared/component/StdForm/std-table/std-table.component';
import { PassengerdashboardComponent } from './shared/component/airelinePassengers/passengerdashboard/passengerdashboard.component';
import { PassengercardsComponent } from './shared/component/airelinePassengers/passengercards/passengercards.component';
import { PassengercountComponent } from './shared/component/airelinePassengers/passengercount/passengercount.component';



@NgModule({
  declarations: [
    AppComponent,
    TodocardsComponent,
    TodoformComponent,
    TodolistComponent,
    ProductdashboardComponent,
    ProductcardComponent,
    ProductformComponent,
    StdFormComponent,
    StdTableComponent,
    PassengerdashboardComponent,
    PassengercardsComponent,
    PassengercountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
