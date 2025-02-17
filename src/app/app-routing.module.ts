import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'routing',
    loadChildren: ()  => import('./angular-concepts/routing/routing-poc.module').then((m) => m.RoutingPocModule)
  },
  {
    path: 'aggrid',
    loadChildren: ()  => import('./ag-grid/ag-grid-concept.module').then((m) => m.AGGridConceptModule)
  },
  {
    path: 'tailwinds',
    loadChildren: ()  => import('./tailwinds/tailwinds-concept.module').then((m) => m.TailwindsConceptModule)
  },
  {
    path: 'rxjs',
    loadChildren: ()  => import('./angular-concepts/rxjs/rxjs.module').then((m) => m.RxjsModule)
  },
  {
    path: 'nsbPublic',
    loadChildren: ()  => import('./nsb-public/nsb-public.module').then((m) => m.NSBPublicModule)
  },
  
  
  
{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
