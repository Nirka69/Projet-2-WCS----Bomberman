import { Injectable } from '@angular/core';


export const Move_top = 1;
export const Move_Right = 2;
export const Move_Bot = 3;
export const Move_Left = 4;
export const Drop_Bomb = 5;
export const Bonus_speed = 6;
export const Bonus_power = 7;
export const Bonus_Bomb_Number = 8;

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

public move : any = 0;
public x : any = 0;
public y : any = 0;

  constructor() { 
   
}}
