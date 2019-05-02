import { Injectable } from '@angular/core';
import { Bomb } from './models/bomb';


export const MOVE_STAND = 0;
export const MOVE_TOP = 1;
export const MOVE_RIGHT = 2;
export const MOVE_BOT = 3;
export const MOVE_LEFT = 4;
export const DROP_BOMB = 5;
export const BONUS_SPEED = 6;
export const BONUS_POWER = 7;
export const BONUS_BOMB_NUMBER = 8;
export const MOVE_STAND2 = 9;
export const MOVE_TOP2 = 10;
export const MOVE_RIGHT2 = 11;
export const MOVE_BOT2 = 12;
export const MOVE_LEFT2 = 13;
export const DROP_BOMB2 = 14;
export const PAUSED = 15;

@Injectable({
  providedIn: 'root'
})


export class GameStateService {
  
  
  move: number;
  bomb = 0;
  bombList: Bomb[] = [];
  
  
  player1 = {
    charX: 1,
    charY: 1,
    move: 0,
    bomb: 0,
    bombList: [],
    breakablet: true,
    maxBomb: 1,
    dateMovement : new Date(),
    speed : 1,
    pause: 0
  };
  
  
  player2 = {
    charX: 21,
    charY: 15,
    move: 9,
    bomb: 0,
    bombList: [],
    breakablet: true,
    maxBomb: 1,
    dateMovement : new Date(),
    speed : 1,
    pause: 0
  };
  
  players = [this.player1, this.player2];
  
  floor = {
    textureUrl: '/assets/img/sol.jpg',
    breakable: false,
    powerUp: false,
    move: true,
    solid: false
  };
  
  wallFix = {
    textureUrl: '/assets/img/mur.png',
    breakable: false,
    powerUp: false,
    solid: true
  };
  
  wallDestructible = {
    textureUrl: '/assets/img/caisse_bois.jpg',
    breakable: true,
    powerUp: true,
    solid: false
  };
  
  borderTopLeft = {
    textureUrl: '/assets/img/haut_gauche.jpg',
    breakable: false,
    powerUp: false,
    solid: true
  };
  
  borderTop = {
    textureUrl: '/assets/img/haut.jpg',
    breakable: false,
    powerUp: false,
    solid: true
  };
  
  borderTopRight = {
    textureUrl: '/assets/img/haut_droite.jpg',
    breakable: false,
    powerUp: false,
    solid: true
  };
  
  borderRight = {
    textureUrl: '/assets/img/droite.jpg',
    breakable: false,
    powerUp: false,
    solid: true
  };
  
  borderBotRight = {
    textureUrl: '/assets/img/bas_droite.jpg',
    breakable: false,
    powerUp: false,
    solid: true
  };
  
  borderBot = {
    textureUrl: '/assets/img/bas.jpg',
    breakable: false,
    powerUp: false,
    solid: true
  };
  
  borderBotLeft = {
    textureUrl: '/assets/img/bas_gauche.jpg',
    breakable: false,
    powerUp: false,
    solid: true
  };
  
  borderLeft = {
    textureUrl: '/assets/img/gauche.jpg',
    breakable: false,
    powerUp: false,
    solid: true
  };
  
  pikup = {
    textureUrl: '/assets/img/power.jpg',
    breakable: true,
    powerUp: true,
    move: true,
    solid: true
  };

test = [
  this.floor,
  this.pikup
]

  textures = [
    this.borderTopLeft,
    this.floor,
    this.wallFix,
    this.wallDestructible,
    this.borderTop,
    this.borderTopRight,
    this.borderRight,
    this.borderBotRight,
    this.borderBot,
    this.borderBotLeft,
    this.borderLeft
  ];
  
  
  
  map =
  [
    [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5],
    [10, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 6],
    [10, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
    [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    [10, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 6],
    [10, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 6],
    [9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7]
  ];
  
  rowLength = this.map[0].length;
  colLength = this.map.length;
  
  reInit() {
    this.map = [
      [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5],
      [10, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 6],
      [10, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 6],
      [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
      [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
      [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
      [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
      [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
      [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
      [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
      [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
      [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
      [10, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 6],
      [10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
      [10, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1, 6],
      [10, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 6],
      [9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7]
    ];
  }
  
  reInitplayer(){
    this.player1= {
      charX: 1,
      charY: 1,
      move: 0,
      bomb: 0,
      bombList: [],
      maxBomb: 1,
      dateMovement : new Date(),
      speed : 1,
      breakablet: true,
      pause: 0
    };
    this.player2 = {
      charX: 21,
      charY: 15,
      move: 9,
      bomb: 0,
      bombList: [],
      breakablet: true,
      maxBomb: 1,
      dateMovement : new Date(),
      speed : 1,
      pause: 0
    };
  }

  counterValue:number=1
  looperfire = setInterval(() => {
    this.counterValue = this.counterValue + 1;
    if (this.counterValue >= 5) {
      clearInterval(this.looperfire)
    }
  }, 15000);


reInitConteur(){
  this.counterValue=1
  this.looperfire = setInterval(() =>{
    this.counterValue =this.counterValue +1;
    if(this.counterValue >=5){
      clearInterval(this.looperfire)
    }
  },15000); 

} 

constructor() {
}
}

