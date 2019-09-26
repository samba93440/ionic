import { Injectable } from '@angular/core';
import { Recettes } from './recettes/recettes.model';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {


  private recettes: Recettes[] = [
    {
      id: 'recette_1',
      title: 'Pancakes',
      imageUrl: 'assets/icon/pancakes.jpg',
      ingredients: ['2 oeufs', 'Lait', 'Farine']

    },
    {
      id: 'recette_2',
      imageUrl: 'assets/icon/pate-crevettes.jpg',
    },
    {
      id: 'recette_3',
      imageUrl: 'assets/icon/tiep-bou-dieun.jpg',
      ingredients: ['Riz', 'Carotte', 'Poisson', 'Chou', 'Huile', 'Persil']
    }
  ];

  // supprimer recette
      return recette.id !== recetteId;
    });
  }
  // recuperer toute les recettes
  getAllRecettes() {
    return [...this.recettes]; // spread operator
  }

  // recuperer une recette
  getOneRecette(recetteId: string) {
    return{
    ...this.recettes.find(recette => {
      return recette.id === recetteId;
    })
  };
}
  constructor() { }
}
