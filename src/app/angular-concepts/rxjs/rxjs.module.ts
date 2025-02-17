import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularWithRxjsComponent } from './angular-with-rxjs/angular-with-rxjs.component';
import { RxJxRotuingModule } from './rxjs-route.module';
import { RxjsContComponent } from './rxjs-cont.component';
import { RXJSResearchComponent } from './rxjs-research/rxjs-research.component';
import { RxjsResearchCondCall } from './rxjs-research-cond-call/rxjs-research-cond-call';



@NgModule({
  declarations: [
    AngularWithRxjsComponent,
    RXJSResearchComponent,
    RxjsResearchCondCall,
    RxjsContComponent
  ],
  imports: [
    CommonModule,
    RxJxRotuingModule
  ]
})
export class RxjsModule { }
