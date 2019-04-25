import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT, DROP_BOMB, MOVE_RIGHT2, MOVE_LEFT2, MOVE_TOP2, MOVE_BOT2, DROP_BOMB2 } from './game-state.service';
import { MapService } from './map.service';
import { Bomb } from './models/bomb';


@Injectable({
  providedIn: 'root'
})
export class GameloopService {


  constructor(public gs: GameStateService, private mapService: MapService) { }

  goMove() {

    if (this.gs.player1.move === MOVE_RIGHT) {
      // tslint:disable-next-line:max-line-length
      if (this.gs.player1.charX < this.mapService.rowLength - 2 && this.mapService.map[this.gs.player1.charY][this.gs.player1.charX + 1] === 1) {
        this.gs.player1.charX += 1;
      }
    }

    if (this.gs.player2.move === MOVE_RIGHT2) {
      // tslint:disable-next-line:max-line-length
      if (this.gs.player2.charX < this.mapService.rowLength - 2 && this.mapService.map[this.gs.player2.charY][this.gs.player2.charX + 1] === 1) {
        this.gs.player2.charX += 1;
      }
    }

    if (this.gs.player1.move === MOVE_LEFT) {
      // tslint:disable-next-line:max-line-length
      if (this.gs.player1.charX > this.mapService.rowLength - 22 && this.mapService.map[this.gs.player1.charY][this.gs.player1.charX - 1] === 1) {
        this.gs.player1.charX -= 1;
      }
    }
    if (this.gs.player2.move === MOVE_LEFT2) {
      // tslint:disable-next-line:max-line-length
      if (this.gs.player2.charX > this.mapService.rowLength - 22 && this.mapService.map[this.gs.player2.charY][this.gs.player2.charX - 1] === 1) {
        this.gs.player2.charX -= 1;
      }
    }

    if (this.gs.player1.move === MOVE_TOP) {
      // tslint:disable-next-line:max-line-length
      if (this.gs.player1.charY > this.mapService.colLength - 16 && this.mapService.map[this.gs.player1.charY - 1][this.gs.player1.charX] === 1) {
        this.gs.player1.charY -= 1;
      }

    }
    if (this.gs.player2.move === MOVE_TOP2) {
      // tslint:disable-next-line:max-line-length
      if (this.gs.player2.charY > this.mapService.colLength - 16 && this.mapService.map[this.gs.player2.charY - 1][this.gs.player2.charX] === 1) {
        this.gs.player2.charY -= 1;
      }

    }
    if (this.gs.player2.move === MOVE_BOT2) {
      // tslint:disable-next-line:max-line-length
      if (this.gs.player2.charY < this.mapService.colLength - 2 && this.mapService.map[this.gs.player2.charY + 1][this.gs.player2.charX] === 1) {
        this.gs.player2.charY += 1;
      }
    }
    if (this.gs.player1.move === MOVE_BOT) {
      // tslint:disable-next-line:max-line-length
      if (this.gs.player1.charY < this.mapService.colLength - 2 && this.mapService.map[this.gs.player1.charY + 1][this.gs.player1.charX] === 1) {
        this.gs.player1.charY += 1;
      }
    } else {
      this.gs.player1.move = 0;
      this.gs.player2.move = 0;

    }


  }

  loop() {
    this.goMove();
    this.dropBomb();
    this.boom();
    requestAnimationFrame(() => this.loop());
  }

  dropBomb() {
    if (this.gs.player1.bomb === DROP_BOMB) {
      const bomb = new Bomb(this.gs.player1.charX, this.gs.player1.charY, new Date(), 1, 0);
      this.gs.player1.bombList.push(bomb);
      this.gs.player1.bomb = 0;
    }
    if (this.gs.player2.bomb === DROP_BOMB2) {
      const bomb2 = new Bomb(this.gs.player2.charX, this.gs.player2.charY, new Date(), 1, 0);
      this.gs.player2.bombList.push(bomb2);
      this.gs.player2.bomb = 0;
    }
  }

  boom() {
    const keptList = [];
    const keptList2 = [];
    const now = new Date();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.gs.player1.bombList.length; i++) {
      const bomb = this.gs.player1.bombList[i];
      const duration = (now.getTime() - bomb.date.getTime());
      if (duration <= 3000) {
        if (duration >= 2500) {
          bomb.explosion = true;
        }
        keptList.push(bomb);
      }
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.gs.player2.bombList.length; i++) {
      const bomb = this.gs.player2.bombList[i];
      const duration = (now.getTime() - bomb.date.getTime());
      if (duration <= 3000) {
        if (duration >= 2500) {
          bomb.explosion = true;
        }
        keptList2.push(bomb);
      }
    }
    this.gs.player1.bombList = keptList;
    this.gs.player2.bombList = keptList2;
  }

  play() {
    this.loop();
  }
}

/* boom() {
  const keptList = [];
  const now = new Date();

  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < this.gamestateservice.bombList.length; i++) {

    const bomb = this.gamestateservice.bombList[i];
    const duration = (now.getTime() - bomb.date.getTime());
    if (duration <= 3000) {
      if (duration >= 2500) {
        bomb.explosion = true;
      }
      keptList.push(bomb);
    }



  } */
