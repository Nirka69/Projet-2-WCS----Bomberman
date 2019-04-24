import { Injectable, HostListener } from '@angular/core';
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT, DROP_BOMB } from './game-state.service';
import { MapService } from './map.service';
import { Bomb } from './models/bomb';


@Injectable({
  providedIn: 'root'
})
export class GameloopService {


  constructor(public gamestateservice: GameStateService, private mapService: MapService) { }

  goMove() {

    if (this.gamestateservice.move === MOVE_RIGHT) {
      if (this.gamestateservice.charX < this.mapService.rowLength - 2) {
        this.gamestateservice.charX += 1;
      }
    }

    if (this.gamestateservice.move === MOVE_LEFT) {
      if (this.gamestateservice.charX > this.mapService.rowLength - 22) {
        this.gamestateservice.charX -= 1;
      }
    }
    if (this.gamestateservice.move === MOVE_TOP) {
      if (this.gamestateservice.charY > this.mapService.colLength - 16) {
        this.gamestateservice.charY -= 1;
      }

    }
    if (this.gamestateservice.move === MOVE_BOT) {
      if (this.gamestateservice.charY < this.mapService.colLength - 2) {
        this.gamestateservice.charY += 1;
      }

    } else {
      this.gamestateservice.move = 0;

    }


  }

  loop() {
    this.goMove();
    this.dropBomb();
    this.boom();
    requestAnimationFrame(() => this.loop());
  }

  dropBomb() {
    if (this.gamestateservice.bomb === DROP_BOMB) {
      const bomb = new Bomb(this.gamestateservice.charX, this.gamestateservice.charY, new Date(), 1, 0);
      this.gamestateservice.bombList.push(bomb);
      this.gamestateservice.bomb = 0;
    }
  }

  boom() {
    const keptList = [];
    const now = new Date();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.gamestateservice.bombList.length; i++) {
      const bomb = this.gamestateservice.bombList[i];
      if (now.getTime() - bomb.date.getTime() <= 3000) {
        keptList.push(bomb);
      }
    }
    this.gamestateservice.bombList = keptList;
  }

  play() {
    this.loop();
  }
}
