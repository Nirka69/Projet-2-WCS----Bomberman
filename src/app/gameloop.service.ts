import { Injectable} from '@angular/core';
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT, DROP_BOMB } from './game-state.service';
import { MapService } from './map.service';
import { Bomb } from './models/bomb';


@Injectable({
  providedIn: 'root'
})
export class GameloopService {
  
  
  constructor(public gs: GameStateService, private mapService: MapService) { }
  
  goMove() {
    
    if (this.gs.move === MOVE_RIGHT) {
      if (this.gs.charX < this.mapService.rowLength - 2 && this.mapService.map[this.gs.charY][this.gs.charX +1] === 1  ){
          this.gs.charX += 1;
      }
    }
    if (this.gs.move === MOVE_LEFT) {
      if (this.gs.charX > this.mapService.rowLength - 22 && this.mapService.map[this.gs.charY][this.gs.charX -1] === 1 ) {
        this.gs.charX -= 1;
      }
    }
    if (this.gs.move === MOVE_TOP) {
      if (this.gs.charY > this.mapService.colLength - 16 && this.mapService.map[this.gs.charY -1][this.gs.charX] === 1 ) {
        this.gs.charY -= 1;
      }
      
    }
    if (this.gs.move === MOVE_BOT) {
      if (this.gs.charY < this.mapService.colLength - 2 && this.mapService.map[this.gs.charY +1][this.gs.charX] === 1 ) {
        this.gs.charY += 1;
      }
      
    } else {
      this.gs.move = 0;
      
    }
    
    
  }
  
  loop() {
    this.goMove();
    this.dropBomb();
    this.boom();
    requestAnimationFrame(() => this.loop());
  }
  
  dropBomb() {
    if(this.gs.bomb === DROP_BOMB)
    {
      let bomb = new Bomb(this.gs.charX, this.gs.charY, new Date(), 1, 0)
      this.gs.bombList.push(bomb)
      this.gs.bomb = 0;
    }
  }
  
  boom()
  {
    let keptList = []
    let now = new Date()
    for(let i = 0; i < this.gs.bombList.length; i++)
    {
      let bomb = this.gs.bombList[i];
      if( now.getTime() - bomb.date.getTime() <= 3000)
      {
        keptList.push(bomb);
      }
    }
    this.gs.bombList = keptList;
  }
  
  play() {
    this.loop();
  }
}
