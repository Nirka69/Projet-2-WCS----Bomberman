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

  character = {
    player: [],
    bomb_Number: [],
    bomb_Power: [],
    move_Speed: []
  }

  player = [
    { id: 'perso1', src: '' },
    { id: 'perso2', src: '' },
    { id: 'perso3', src: '' },
    { id: 'perso4', src: '' }
  ];

  bomb_Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  bomb_Power = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  move_Speed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {

  }
}
