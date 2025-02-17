import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { EmailSubscribeTlComponent } from './tailwinds-email-subscribe/email-subscribe-tl.component';
import { TailsWindsbasicComponent } from './tailwind-sandbox-basic/tailwindis-basic.component';
import { PriceGridTlComponent } from './tailwinds-pricing-grids/pricing-grid-tl.component';





const routes: Routes = [
  {
    path: '',
    component: TailsWindsbasicComponent,
    children: [
      {
        path: 'email',
        component: EmailSubscribeTlComponent,
        children: [],
      },
      {
        path: 'pgrid',
        component: PriceGridTlComponent,
        children: [],
      },
      {
        path: 'basics',
        component: TailsWindsbasicComponent,
        children: [],
      }
    ],
  },

];

@NgModule({
  declarations: [EmailSubscribeTlComponent,TailsWindsbasicComponent],
  imports: [CommonModule,RouterOutlet, RouterModule.forChild(routes),

    ],
  providers: [],
})
export class TailwindsConceptModule {}
