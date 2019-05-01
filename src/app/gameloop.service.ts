import { Injectable } from '@angular/core';
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_LEFT, MOVE_BOT, DROP_BOMB, MOVE_RIGHT2, MOVE_LEFT2, MOVE_TOP2, MOVE_BOT2, DROP_BOMB2 } from './game-state.service';
import { MapService } from './map.service';
import { Bomb } from './models/bomb';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class GameloopService {
  booom: HTMLAudioElement;
  dropsound: HTMLAudioElement;
  deadsound: HTMLAudioElement;

  
  
  constructor(public gs: GameStateService, private mapService: MapService, private router: Router) {}


  goMove() {
    let now = new Date;
    if ((now.getTime() - this.gs.player1.dateMovement.getTime()) >= 200) {
      if (this.gs.player1.move === MOVE_RIGHT) {
        if (this.gs.player1.charX < this.gs.rowLength - 2 && this.gs.map[this.gs.player1.charY][this.gs.player1.charX + 1] === 1) {
          this.gs.player1.charX += 1;

          this.gs.player1.dateMovement = new Date()
        }
      }
      if (this.gs.player1.move === MOVE_BOT) {
        if (this.gs.player1.charY < this.gs.colLength - 2 && this.gs.map[this.gs.player1.charY + 1][this.gs.player1.charX] === 1) {
          this.gs.player1.charY += 1;

          this.gs.player1.dateMovement = new Date()
        }
      }
      if (this.gs.player1.move === MOVE_LEFT) {
        if (this.gs.player1.charX > this.gs.rowLength - 22 && this.gs.map[this.gs.player1.charY][this.gs.player1.charX - 1] === 1) {
          this.gs.player1.charX -= 1;

          this.gs.player1.dateMovement = new Date()
        }

        
      }
      if (this.gs.player1.move === MOVE_TOP) {
        if (this.gs.player1.charY > this.gs.colLength - 16 && this.gs.map[this.gs.player1.charY - 1][this.gs.player1.charX] === 1) {
          this.gs.player1.charY -= 1;

          this.gs.player1.dateMovement = new Date()
        }
      }

      if ((now.getTime() - this.gs.player2.dateMovement.getTime()) >= 90) {
        if (this.gs.player2.move === MOVE_RIGHT2) {
          if (this.gs.player2.charX < this.gs.rowLength - 2 && this.gs.map[this.gs.player2.charY][this.gs.player2.charX + 1] === 1) {
            this.gs.player2.charX += 1;

            this.gs.player2.dateMovement = new Date()
          }
        }
        if (this.gs.player2.move === MOVE_LEFT2) {
          if (this.gs.player2.charX > this.gs.rowLength - 22 && this.gs.map[this.gs.player2.charY][this.gs.player2.charX - 1] === 1) {
            this.gs.player2.charX -= 1;

            this.gs.player2.dateMovement = new Date()
          }
        }
        if (this.gs.player2.move === MOVE_TOP2) {
          if (this.gs.player2.charY > this.gs.colLength - 16 && this.gs.map[this.gs.player2.charY - 1][this.gs.player2.charX] === 1) {
            this.gs.player2.charY -= 1;

            this.gs.player2.dateMovement = new Date()
          }
        }
        if (this.gs.player2.move === MOVE_BOT2) {
          if (this.gs.player2.charY < this.gs.colLength - 2 && this.gs.map[this.gs.player2.charY + 1][this.gs.player2.charX] === 1) {
            this.gs.player2.charY += 1;

            this.gs.player2.dateMovement = new Date()
          }
        }
      }
    }
  }
  dropBomb() {
    if (this.gs.player1.bomb === DROP_BOMB && this.gs.player1.maxBomb > this.gs.player1.bombList.length) {
      let bomb = new Bomb(this.gs.player1.charX, this.gs.player1.charY, new Date(),this.gs.counterValue ,0)
      this.gs.player1.bombList.push(bomb)
      this.gs.player1.bomb = 0;
      this.dropsound = new Audio()
      this.dropsound.src = "/assets/Sound/ala.mp3"
      this.dropsound.load()
      this.dropsound.play()
    
    }
    if (this.gs.player2.bomb === DROP_BOMB2 && this.gs.player2.maxBomb > this.gs.player2.bombList.length) {
      let bomb2 = new Bomb(this.gs.player2.charX, this.gs.player2.charY, new Date(), this.gs.counterValue , 0)
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
        if (duration >= 2800 && !bomb.explosion) {
          bomb.explosion = true;
          
          this.booom = new Audio()
          this.booom.volume = .3
          this.booom.src = "/assets/Sound/BOM_11_S.wav"
          this.booom.load()
          this.booom.play()

          /* CASSER MUR DE DROITE */

          for (let droite = 0; droite <= bomb.power; droite++) {
            const x = bomb.positionX + droite;
            const y = bomb.positionY;
            const cell = this.gs.map[y][x];

            const cellProperty = this.gs.textures[cell];

            if (cellProperty.solid) {
              break;
            }
            bomb.rightflame = droite;
            if (cellProperty.breakable) {
              this.gs.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              /*  alert('ben'); */

              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win2']);
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              /* alert('betty'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win1']);
            }

          }

          /* CASSER MUR DU BAS */

          for (let bas = 0; bas <= bomb.power; bas++) {
            const x = bomb.positionX;
            const y = bomb.positionY + bas;
            const cell = this.gs.map[y][x];
            const cellProperty = this.gs.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            bomb.bottomflame = bas;
            if (cellProperty.breakable) {
              this.gs.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              /* alert('ben'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win2']);
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              /* alert('betty'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win1']);
            }
          }

          /* CASSER MUR DE GAUCHE */

          for (let gauche = 0; gauche <= bomb.power; gauche++) {
            const x = bomb.positionX - gauche;
            const y = bomb.positionY;
            const cell = this.gs.map[y][x];
            const cellProperty = this.gs.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            bomb.leftflame = gauche;
            if (cellProperty.breakable) {
              this.gs.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              /* alert('ben'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win2']);
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              /* alert('betty'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win1']);
            }
          }

          /* CASSER MUR DU HAUT */

          for (let haut = 0; haut <= bomb.power; haut++) {
            const x = bomb.positionX;
            const y = bomb.positionY - haut;
            const cell = this.gs.map[y][x];
            const cellProperty = this.gs.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            bomb.topflame = haut;
            if (cellProperty.breakable) {
              this.gs.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              /* alert('ben'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win2']);
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              /* alert('betty'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win1']);
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
        if (duration >= 2800 && !bomb2.explosion) {
          bomb2.explosion = true;
          this.booom = new Audio()
          this.booom.src = "/assets/Sound/BOM_11_S.wav"
          this.booom.load()
          this.booom.play()


          /* CASSER MUR DE DROITE */

          for (let droite = 0; droite <= bomb2.power; droite++) {
            const x = bomb2.positionX + droite;
            const y = bomb2.positionY;
            const cell = this.gs.map[y][x];

            const cellProperty = this.gs.textures[cell];

            if (cellProperty.solid) {
              break;
            }
            bomb2.rightflame = droite;
            if (cellProperty.breakable) {
              this.gs.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              /*  alert('ben'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win2']);
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              /* alert('betty'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win1']);
            }
          }

          /* CASSER MUR DU BAS */

          for (let bas = 0; bas <= bomb2.power; bas++) {
            const x = bomb2.positionX;
            const y = bomb2.positionY + bas;
            const cell = this.gs.map[y][x];
            const cellProperty = this.gs.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            bomb2.bottomflame = bas;
            if (cellProperty.breakable) {
              this.gs.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              /*  alert('ben'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win2']);
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              /* alert('betty'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win1']);
            }
          }

          /* CASSER MUR DE GAUCHE */

          for (let gauche = 0; gauche <= bomb2.power; gauche++) {
            const x = bomb2.positionX - gauche;
            const y = bomb2.positionY;
            const cell = this.gs.map[y][x];
            const cellProperty = this.gs.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            bomb2.leftflame = gauche;
            if (cellProperty.breakable) {
              this.gs.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              /* alert('ben'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win2']);
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              /* alert('betty'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win1']);
            }
          }

          /* CASSER MUR DU HAUT */

          for (let haut = 0; haut <= bomb2.power; haut++) {
            const x = bomb2.positionX;
            const y = bomb2.positionY - haut;
            const cell = this.gs.map[y][x];
            const cellProperty = this.gs.textures[cell];
            if (cellProperty.solid) {
              break;
            }
            bomb2.topflame = haut;
            if (cellProperty.breakable) {
              this.gs.map[y][x] = 1;
              break;
            }
            if (this.gs.player1.charX === x && this.gs.player1.charY === y && duration >= 2700) {
              /* alert('ben'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win2']);
            }
            if (this.gs.player2.charX === x && this.gs.player2.charY === y && duration >= 2700) {
              /* alert('betty'); */
              this.deadsound = new Audio()
              this.deadsound.src = "/assets/Sound/B_A039.wav"
              this.deadsound.load()
              this.deadsound.play()
              this.router.navigate(['/win1']);
            }

          }

        }
        keptList2.push(bomb2);
      }
    }
    this.gs.player1.bombList = keptList;
    this.gs.player2.bombList = keptList2;
  }

  loop() {
    this.goMove();
    this.dropBomb();
    this.boom();

    requestAnimationFrame(() => this.loop());
  }
}
