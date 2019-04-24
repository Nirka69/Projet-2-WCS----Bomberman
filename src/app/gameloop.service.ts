import { Injectable, HostListener } from '@angular/core';
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT, DROP_BOMB, MOVE_RIGHT2, MOVE_LEFT2, MOVE_TOP2, MOVE_BOT2 } from './game-state.service';
import { MapService } from './map.service';
import { Bomb } from './models/bomb';


@Injectable({
  providedIn: 'root'
})
export class GameloopService {
  
  
  constructor(public gamestateservice: GameStateService, private mapService: MapService) { }
  
  goMove() {
    
    if (this.gamestateservice.player1.move === MOVE_RIGHT) {
      if (this.gamestateservice.player1.charX < this.mapService.rowLength - 2) {
        this.gamestateservice.player1.charX += 1;
      }
    }

    if (this.gamestateservice.player2.move === MOVE_RIGHT2) {
      if (this.gamestateservice.player2.charX < this.mapService.rowLength - 2) {
        this.gamestateservice.player2.charX += 1;
      }
    }
    
    if (this.gamestateservice.player1.move === MOVE_LEFT) {
      if (this.gamestateservice.player1.charX > this.mapService.rowLength - 22) {
        this.gamestateservice.player1.charX -= 1;
      }
    }
    if (this.gamestateservice.player2.move === MOVE_LEFT2) {
      if (this.gamestateservice.player2.charX > this.mapService.rowLength - 22) {
        this.gamestateservice.player2.charX -= 1;
      }
    }

    if (this.gamestateservice.player1.move === MOVE_TOP) {
      if (this.gamestateservice.player1.charY > this.mapService.colLength - 16) {
        this.gamestateservice.player1.charY -= 1;
      }
      
    }
    if (this.gamestateservice.player2.move === MOVE_TOP2) {
      if (this.gamestateservice.player2.charY > this.mapService.colLength - 16) {
        this.gamestateservice.player2.charY -= 1;
      }
      
    }
    if (this.gamestateservice.player2.move === MOVE_BOT2) {
      if (this.gamestateservice.player2.charY < this.mapService.colLength - 2) {
        this.gamestateservice.player2.charY += 1;
      }  
    }
    if (this.gamestateservice.player1.move === MOVE_BOT) {
      if (this.gamestateservice.player1.charY < this.mapService.colLength - 2) {
        this.gamestateservice.player1.charY += 1;
      }  
    } 
    else {
      this.gamestateservice.player1.move = 0;
      this.gamestateservice.player2.move = 0;
      
    }
    
    
  }
  
  loop() {
    this.goMove();
    this.dropBomb();
    this.boom();
    requestAnimationFrame(() => this.loop());
  }
  
  dropBomb() {
    if(this.gamestateservice.player1.bomb === DROP_BOMB)
    {
      let bomb = new Bomb(this.gamestateservice.player1.charX, this.gamestateservice.player1.charY, new Date(), 1, 0)
      this.gamestateservice.player1.bombList.push(bomb)
      this.gamestateservice.player1.bomb = 0;
    }
  }
  
  boom()
  {
    let keptList = []
    let now = new Date()
    for(let i = 0; i < this.gamestateservice.player1.bombList.length; i++)
    {
      let bomb = this.gamestateservice.player1.bombList[i];
      if( now.getTime() - bomb.date.getTime() <= 3000)
      {
        keptList.push(bomb);
      }
    }
    this.gamestateservice.player1.bombList = keptList;
  }
  
  play() {
    this.loop();
  }
}
