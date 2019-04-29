import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT, DROP_BOMB, MOVE_RIGHT2, MOVE_LEFT2, MOVE_TOP2, MOVE_BOT2, DROP_BOMB2 } from './game-state.service';
import { MapService } from './map.service';
import { Bomb } from './models/bomb';





@Injectable({
  providedIn: 'root'
})
export class GameloopService {
  booom: HTMLAudioElement;
  dropsound: HTMLAudioElement;
  deadsound: HTMLAudioElement;

  


  constructor(public gs: GameStateService, private mapService: MapService) {}

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
    }
    else {
      this.gs.player1.move = 0;
      this.gs.player2.move = 0;

    }


  }



  dropBomb() {
    if (this.gs.player1.bomb === DROP_BOMB) {
      let bomb = new Bomb(this.gs.player1.charX, this.gs.player1.charY, new Date(), 1, 0)
      this.gs.player1.bombList.push(bomb)
      this.gs.player1.bomb = 0;
      this.dropsound = new Audio()
      this.dropsound.src = "/assets/Sound/ala.mp3"
      this.dropsound.load()
      this.dropsound.play()
    }
    if (this.gs.player2.bomb === DROP_BOMB2) {
      let bomb2 = new Bomb(this.gs.player2.charX, this.gs.player2.charY, new Date(), 1, 0)
      this.gs.player2.bombList.push(bomb2)
      this.gs.player2.bomb = 0;
      this.dropsound = new Audio()
      this.dropsound.src = "/assets/Sound/alafemmewav"
      this.dropsound.load()
      this.dropsound.play()
    }
  }



  boom() {

    let keptList = []
    let keptList2 = []
    let now = new Date()
    for (let i = 0; i < this.gs.player1.bombList.length; i++) {
      let bomb = this.gs.player1.bombList[i];
      const duration = (now.getTime() - bomb.date.getTime());
      if (duration <= 3000) {
        if (duration >= 2500) {
          bomb.explosion = true;
          this.booom = new Audio()
          this.booom.src = "/assets/Sound/BOM_11_S.wav"
          this.booom.load()
          this.booom.play()

          /* CASSER MUR DE DROITE */

          for (let droite = 0; droite <= bomb.power; droite++) {
            const x = bomb.positionX + droite;
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
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              alert('ben');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              alert('betty');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }

          }

          /* CASSER MUR DU BAS */

          for (let bas = 0; bas <= bomb.power; bas++) {
            const x = bomb.positionX;
            const y = bomb.positionY + bas;
            const cell = this.mapService.map[y][x];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              alert('ben');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              alert('betty');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
          }

          /* CASSER MUR DE GAUCHE */

          for (let gauche = 0; gauche <= bomb.power; gauche++) {
            const x = bomb.positionX - gauche;
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
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              alert('ben');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              alert('betty');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
          }

          /* CASSER MUR DU HAUT */

          for (let haut = 0; haut <= bomb.power; haut++) {
            const x = bomb.positionX;
            const y = bomb.positionY - haut;
            const cell = this.mapService.map[y][x];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              alert('ben');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              alert('betty');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
          }
        }
        keptList.push(bomb);
      }
    }


    /* PLAYER 2 */

    for (let i = 0; i < this.gs.player2.bombList.length; i++) {
      const bomb2 = this.gs.player2.bombList[i];
      const duration = (now.getTime() - bomb2.date.getTime());
      if (duration <= 3000) {
        if (duration >= 2500) {
          bomb2.explosion = true;
          this.booom = new Audio()
          this.booom.src = "/assets/Sound/BOM_11_S.wav"
          this.booom.load()
          this.booom.play()


          /* CASSER MUR DE DROITE */

          for (let droite = 0; droite <= bomb2.power; droite++) {
            const x = bomb2.positionX + droite;
            const y = bomb2.positionY;
            const cell = this.mapService.map[y][x];

            const cellProperty = this.mapService.textures[cell];

            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              alert('ben');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              alert('betty');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
          }

          /* CASSER MUR DU BAS */

          for (let bas = 0; bas <= bomb2.power; bas++) {
            const x = bomb2.positionX;
            const y = bomb2.positionY + bas;
            const cell = this.mapService.map[y][x];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              alert('ben');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              alert('betty');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
          }

          /* CASSER MUR DE GAUCHE */

          for (let gauche = 0; gauche <= bomb2.power; gauche++) {
            const x = bomb2.positionX - gauche;
            const y = bomb2.positionY;
            const cell = this.mapService.map[y][x];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              alert('ben');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              alert('betty');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
          }

          /* CASSER MUR DU HAUT */

          for (let haut = 0; haut <= bomb2.power; haut++) {
            const x = bomb2.positionX;
            const y = bomb2.positionY - haut;
            const cell = this.mapService.map[y][x];
            const cellProperty = this.mapService.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            if (cellProperty.breakable) {
              this.mapService.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              alert('ben');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              alert('betty');
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
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
