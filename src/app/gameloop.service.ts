import { Injectable, HostListener } from '@angular/core';
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT } from './game-state.service';
import { MapComponent } from './map/map.component';


@Injectable({
  providedIn: 'root'
})
export class GameloopService {


  constructor(public gamestateservice: GameStateService) { }

  goMove() {

    if (this.gamestateservice.move === MOVE_RIGHT) {
      this.gamestateservice.charX += 32;
      if (this.gamestateservice.move >= 672) {
        this.gamestateservice.charX -= 32;
      }
    }

    if (this.gamestateservice.move === MOVE_LEFT) {
      this.gamestateservice.charX -= 32;
      if (this.gamestateservice.move <= 0) {
        this.gamestateservice.charX += 32;
      }
    }
    if (this.gamestateservice.move === MOVE_TOP) {
      this.gamestateservice.charY -= 32;
      if (this.gamestateservice.move <= 0) {
        this.gamestateservice.charY += 32;

      }
    }
    if (this.gamestateservice.move === MOVE_BOT) {
      this.gamestateservice.charY += 32;
      if (this.gamestateservice.move >= 448) {
        this.gamestateservice.charY -= 32;
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
