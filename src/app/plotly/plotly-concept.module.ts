import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PlotlyFacetComponent } from './facet/plotly-facet.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;






const routes: Routes = [
  {
    path: '',
    component: PlotlyFacetComponent,
    children: [

    ],
  },

];

@NgModule({
  declarations: [PlotlyFacetComponent],
  imports: [CommonModule, RouterOutlet, RouterModule.forChild(routes)],
  providers: [],
})
export class PlotlyConceptModule {}
