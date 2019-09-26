import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecettesService } from 'src/app/recettes.service';
import { Recettes } from '../recettes.model';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {
  chargementRecette: Recettes;

  constructor(private activatedRoute: ActivatedRoute, private recetteService: RecettesService) {
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has('recetteId')) {
        return;

      }
      const recetteId = paramMap.get('recetteId');
      this.chargementRecette = this.recetteService.getOneRecette(recetteId);

    });
  }

}
