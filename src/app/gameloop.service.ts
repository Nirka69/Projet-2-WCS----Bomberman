import { Injectable, HostListener } from '@angular/core';
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT } from './game-state.service';
import { MapComponent } from './map/map.component';


@Injectable({
  providedIn: 'root'
})
export class GameloopService {
  public move: number;





  constructor(public gamestateservice: GameStateService) { }

  goMove() {

    if (this.gamestateservice.move === MOVE_RIGHT) {
      this.move += 32;
      if (this.move >= 672) {
        this.move -= 32;
      }
    }

    if (this.gamestateservice.move === MOVE_LEFT) {
      this.move -= 32;
      if (this.move <= 0) {
        this.move += 32;
      }
    }
    if (this.gamestateservice.move === MOVE_TOP) {
      this.move -= 32;
      if (this.move <= 0) {
        this.move += 32;

      }
    }
    if (this.gamestateservice.move === MOVE_BOT) {
      this.move += 32;
      if (this.move >= 448) {
        this.move -= 32;
      }
    } else {
      this.move = 0;

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
