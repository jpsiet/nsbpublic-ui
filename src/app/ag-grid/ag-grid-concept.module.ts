import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { SimpleAgGridComponent } from './simple-grid/simple-grid.component';
import { AgGridModule } from 'ag-grid-angular';



const routes: Routes = [
  {
    path: '',
    component: SimpleAgGridComponent,
    children: [],
  },
];

@NgModule({
  declarations: [SimpleAgGridComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
    AgGridModule
    ],
  providers: [],
})
export class AGGridConceptModule {}
