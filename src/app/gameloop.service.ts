import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT, DROP_BOMB, MOVE_RIGHT2, MOVE_LEFT2, MOVE_TOP2, MOVE_BOT2, DROP_BOMB2 } from './game-state.service';
import { MapService } from './map.service';
import { Bomb } from './models/bomb';
import { getPlayers } from '@angular/core/src/render3/players';




@Injectable({
  providedIn: 'root'
})
export class GameloopService {


  constructor(public gs: GameStateService, private mapService: MapService) { }
  loop() {
    this.goMove();
    this.dropBomb();
    this.boom();
    requestAnimationFrame(() => this.loop());
  }


  goMove() {

    if (this.gs.player1.move === MOVE_RIGHT) {
      
      if (this.gs.player1.charX < this.mapService.rowLength - 2 && this.mapService.map[this.gs.player1.charY][this.gs.player1.charX + 1] === 1) {
        this.gs.player1.charX += 1;
      }
    }

    if (this.gs.player2.move === MOVE_RIGHT2) {
      
      if (this.gs.player2.charX < this.mapService.rowLength - 2 && this.mapService.map[this.gs.player2.charY][this.gs.player2.charX + 1] === 1) {
        this.gs.player2.charX += 1;
      }
    }

    if (this.gs.player1.move === MOVE_LEFT) {
      
      if (this.gs.player1.charX > this.mapService.rowLength - 22 && this.mapService.map[this.gs.player1.charY][this.gs.player1.charX - 1] === 1) {
        this.gs.player1.charX -= 1;
      }
    }
    if (this.gs.player2.move === MOVE_LEFT2) {
      
      if (this.gs.player2.charX > this.mapService.rowLength - 22 && this.mapService.map[this.gs.player2.charY][this.gs.player2.charX - 1] === 1) {
        this.gs.player2.charX -= 1;
      }
    }

    if (this.gs.player1.move === MOVE_TOP) {
      
      if (this.gs.player1.charY > this.mapService.colLength - 16 && this.mapService.map[this.gs.player1.charY - 1][this.gs.player1.charX] === 1) {
        this.gs.player1.charY -= 1;
      }

    }
    if (this.gs.player2.move === MOVE_TOP2) {
      
      if (this.gs.player2.charY > this.mapService.colLength - 16 && this.mapService.map[this.gs.player2.charY - 1][this.gs.player2.charX] === 1) {
        this.gs.player2.charY -= 1;
      }

    }
    if (this.gs.player2.move === MOVE_BOT2) {
      
      if (this.gs.player2.charY < this.mapService.colLength - 2 && this.mapService.map[this.gs.player2.charY + 1][this.gs.player2.charX] === 1) {
        this.gs.player2.charY += 1;
      }
    }
    if (this.gs.player1.move === MOVE_BOT) {
      
      if (this.gs.player1.charY < this.mapService.colLength - 2 && this.mapService.map[this.gs.player1.charY + 1][this.gs.player1.charX] === 1) {
        this.gs.player1.charY += 1;
      }
    } else {
      this.gs.player1.move = 0;
      this.gs.player2.move = 0;

    }


  }



  dropBomb() {
    if (this.gs.player1.bomb === DROP_BOMB && this.gs.player1.bombNumber != 0) {
      const bomb = new Bomb(this.gs.player1.charX, this.gs.player1.charY, new Date(), 1, 0);
      this.gs.player1.bombList.push(bomb);
      this.gs.player1.bomb = 0;
      this.gs.player1.bombNumber -= 1;
    }
    if (this.gs.player2.bomb === DROP_BOMB2) {
      const bomb2 = new Bomb(this.gs.player2.charX, this.gs.player2.charY, new Date(), 1, 1);
      this.gs.player2.bombList.push(bomb2);
      this.gs.player2.bomb = 0;
    }
  }

  boom() {
    const keptList = [];
    const keptList2 = [];
    const now = new Date();
    
    for (let i = 0; i < this.gs.player1.bombList.length; i++) {
      const bomb = this.gs.player1.bombList[i];
      const duration = (now.getTime() - bomb.date.getTime());
      if (duration <= 3000) {
        
          
        if (duration >= 2500) {
           bomb.explosion = true;  
           this.gs.player1.bombNumber = 1;        
          
           for (let j = 0; j <= bomb.power; j++) {
            const x = bomb.positionX + j;
            const y = bomb.positionY;
            const cell = this.mapService.map[y][x];
            

            const cellProperty = this.mapService.textures[cell];

            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
              break;

            }


            


          }

          for (let h = 0; h <= bomb.power; h++) {
            const x = bomb.positionX;
            const y = bomb.positionY + h;
            const cell = this.mapService.map[y][x];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
            }

           


          }

          for (let b = 0; b <= bomb.power; b++) {
            const x = bomb.positionX - b;
            const y = bomb.positionY;
            const cell = this.mapService.map[y][x];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
            }
          }

          for (let k = 0; k <= bomb.power; k++) {
            const x = bomb.positionX;
            const y = bomb.positionY - k;
            const cell = this.mapService.map[y][x];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
            }

            if (this.gs.player1.charY === y) {
              alert('les petites couilles de ben ');
              break;
            }
            

          }
          
        }
        keptList.push(bomb);
        
      }
    }
    
    for (let i = 0; i < this.gs.player2.bombList.length; i++) {
      const bomb2 = this.gs.player2.bombList[i];
      const duration = (now.getTime() - bomb2.date.getTime());
      if (duration <= 3000) {
        if (duration >= 2500) {
          bomb2.explosion = true;
          for (let j = 0; j <= bomb2.power; j++) {
            const cell = this.mapService.map[bomb2.positionY][bomb2.positionX + j];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[bomb2.positionY][bomb2.positionX + j] = 1;
            }

          }

          for (let h = 0; h <= bomb2.power; h++) {
            const cell = this.mapService.map[bomb2.positionY + h][bomb2.positionX];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[bomb2.positionY + h][bomb2.positionX] = 1;
            }

          }

          for (let b = 0; b <= bomb2.power; b++) {
            const cell = this.mapService.map[bomb2.positionY][bomb2.positionX - b];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[bomb2.positionY][bomb2.positionX - b] = 1;
            }

          }

          for (let k = 0; k <= bomb2.power; k++) {
            const cell = this.mapService.map[bomb2.positionY - k][bomb2.positionX];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[bomb2.positionY - k][bomb2.positionX] = 1;
            }

          }

        }
        keptList2.push(bomb2);
      }
    }
    this.gs.player1.bombList = keptList;
    this.gs.player2.bombList = keptList2;
  }

  play() {
    this.loop();
  }
}
