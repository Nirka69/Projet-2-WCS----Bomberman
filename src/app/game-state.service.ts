import { Injectable } from '@angular/core';

export const MOVE_TOP = 1;
export const MOVE_RIGHT = 2;
export const MOVE_BOT = 3;
export const MOVE_LEFT = 4;
export const DROP_BOMB = 5;
export const BONUS_SPEED = 6;
export const BONUS_POWER = 7;
export const BONUS_BOMB_NUMBER = 8;

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

<<<<<<< HEAD
  character = {
    player: [],
   
  }
=======
  charX = 1;
  charY = 1;
  move: number;
>>>>>>> dev


  /* player = [
    { id: 'perso1', src: '' },
    { id: 'perso2', src: '' },
    { id: 'perso3', src: '' },
    { id: 'perso4', src: '' }
  ];

  bombNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  bombPower = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  moveSpeed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

  constructor() {
  }

  setMove(state: number) {
    this.move = state;
  }
}
