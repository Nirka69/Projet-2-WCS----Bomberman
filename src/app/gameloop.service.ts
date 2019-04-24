import { Injectable, HostListener } from '@angular/core';
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT } from './game-state.service';
import { MapService } from './map.service';


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
    requestAnimationFrame(() => this.loop());
  }

  play() {
    this.loop();
  }
}
