
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';

import * as Plotly from 'plotly.js-dist-min';



@Component({
  selector: 'plotly-facet.component',
  templateUrl: './plotly-facet.component.html',
  styleUrls: ['./plotly-facet.component.scss']
})
export class PlotlyFacetComponent  implements OnInit ,AfterViewInit  {
  @ViewChild('plot',{static: true}) chart!: ElementRef;

  plotId = '123';

   data = [{
    x: [1, 2, 3],
    y: [4, 1, 6],
    type: 'scatter'
  }];

 layout = {
    title: 'Sample Plot',
  };

  ngOnInit( ): void {

   }

   ngAfterViewInit() {

    Plotly.newPlot(this.plotId, this.data as any , this.layout,{

    });
  }









}


