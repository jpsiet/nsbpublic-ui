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
import { AlertDialogComponent } from './angular-material/alert-dialog/alert-dialog.component';
import { ConfirmationDialog } from './angular-material/confirmation-dialog/confirmation-dialog.compoennt';
import { HeaderComponent } from './header-component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
