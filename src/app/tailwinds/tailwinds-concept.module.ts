import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { EmailSubscribeTlComponent } from './email-subscribe/email-subscribe-tl.component';





const routes: Routes = [
  {
    path: '',
    component: EmailSubscribeTlComponent,
    children: [],
  }
];

@NgModule({
  declarations: [EmailSubscribeTlComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
    
    ],
  providers: [],
})
export class TailwindsConceptModule {}
