import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { EmailSubscribeTlComponent } from './tailwinds-email-subscribe/email-subscribe-tl.component';
import { TailsWindsbasicComponent } from './tailwind-sandbox-basic/tailwindis-sandbox.component';





const routes: Routes = [
  {
    path: '',
    component: TailsWindsbasicComponent,
    children: [],
  },
  {
    path: 'email-subscribe',
    component: EmailSubscribeTlComponent,
    children: [],
  },
  {
    path: 'basics',
    component: TailsWindsbasicComponent,
    children: [],
  },
];

@NgModule({
  declarations: [EmailSubscribeTlComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
    
    ],
  providers: [],
})
export class TailwindsConceptModule {}
