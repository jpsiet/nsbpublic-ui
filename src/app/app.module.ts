import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import 'ag-grid-enterprise';

import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule, SvgIconComponent } from 'angular-svg-icon';

import { MaterialExampleModule } from './material.module';
import { StudentsComponent } from './nsb-public/component/students/students.component';
import { AddStudentsComponent } from './nsb-public/component/add-students/add-students.component';
import { StudentGridComponent } from './nsb-public/component/student-grid/student-grid.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertDialogComponent } from './angular-material/alert-dialog/alert-dialog.component';
import { ConfirmationDialog } from './angular-material/confirmation-dialog/confirmation-dialog.compoennt';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentGridComponent,
    AddStudentsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    FormsModule,
    MaterialExampleModule

  ],
  entryComponents:[
    ConfirmationDialog, AlertDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
