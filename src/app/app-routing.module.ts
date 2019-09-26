import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recettes', pathMatch: 'full' },
  {
    path: 'recettes',
      children : [
        {
          path: '',
          loadChildren: './recettes/recettes.module#RecettesPageModule'
        },
        {
          path: ':recetteId',
          loadChildren: './recettes/recette-detail/recette-detail.module#RecetteDetailPageModule'
        }
      ]
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
