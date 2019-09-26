import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecetteDetailPage } from './recette-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecetteDetailPage]
})
export class RecetteDetailPageModule {}
