import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

const materialArr = [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialArr
  ],
  exports : [
    ...materialArr
  ]
})
export class MaterialModule { }
