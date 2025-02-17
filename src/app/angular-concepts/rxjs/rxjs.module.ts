import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularWithRxjsComponent } from './angular-with-rxjs/angular-with-rxjs.component';
import { RxJxRotuingModule } from './rxjs-route.module';
import { RxjsContComponent } from './rxjs-cont.component';
import { ConditionalApiCall } from './conditional-api-call/conditional-api-call';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AngularWithRxjsComponent,
    ConditionalApiCall,
    RxjsContComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxJxRotuingModule
  ]
})
export class RxjsModule { }
