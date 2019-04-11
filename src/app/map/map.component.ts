import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  floor = {
    textureUrl: '/assets/img/sol.jpg',
    breakable: false,
    powerUp: false
  };

  wallFix = {
    textureUrl: '/assets/img/mur.png',
    breakable: false,
    powerUp: false
  };

  wallDestructible = {
    textureUrl: '/assets/img/caisse_bois.jpg',
    breakable: true,
    powerUp: true
  };

  borderTopLeft = {
    textureUrl: '/assets/img/haut_gauche.jpg',
    breakable: false,
    powerUp: false
  };

  borderTop = {
    textureUrl: '/assets/img/haut.jpg',
    breakable: false,
    powerUp: false
  };

  borderTopRight = {
    textureUrl: '/assets/img/haut_droite.jpg',
    breakable: false,
    powerUp: false
  };

  borderRight = {
    textureUrl: '/assets/img/droite.jpg',
    breakable: false,
    powerUp: false
  };

  borderBotRight = {
    textureUrl: '/assets/img/bas_droite.jpg',
    breakable: false,
    powerUp: false
  };

  borderBot = {
    textureUrl: '/assets/img/bas.jpg',
    breakable: false,
    powerUp: false
  };

  borderBotLeft = {
    textureUrl: '/assets/img/bas_gauche.jpg',
    breakable: false,
    powerUp: false
  };

  borderLeft = {
    textureUrl: '/assets/img/gauche.jpg',
    breakable: false,
    powerUp: false
  };

  textures = [
    this.borderTopLeft,
    this.floor,
    this.wallFix,
    this.wallDestructible,
    this.borderTop,
    this.borderTopRight,
    this.borderRight,
    this.borderBotRight,
    this.borderBot,
    this.borderBotLeft,
    this.borderLeft
  ];

  map = [
    [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5],
    [10, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 6],
    [10, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 6],
    [10, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 6],
    [9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7]
  ];

/*   private nbColonne = 23;
  private nbLigne = 17;
  private tableauMur = [];

  constructor() {
    for (let i = 0; i < this.nbLigne; i++) {
      const gridRow = i + 1;

      for (let j = 0; j < this.nbColonne; j++) {
        const gridColumn = j + 1;

        this.tableauMur.push([gridRow, gridColumn]);
      }
    }
    console.log(this.tableauMur);
  } */

  ngOnInit() {}
}
