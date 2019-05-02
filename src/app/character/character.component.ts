import { Component, OnInit, HostListener } from '@angular/core';
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_BOT, MOVE_LEFT, MOVE_STAND, DROP_BOMB, MOVE_TOP2, MOVE_RIGHT2, MOVE_BOT2, MOVE_LEFT2, MOVE_STAND2, DROP_BOMB2, PAUSED } from '../game-state.service';
import { GameloopService } from '../gameloop.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})

export class CharacterComponent implements OnInit {
  
  public refresh: any;
  public move: any;
  
  constructor(public gs: GameStateService, public gameloop: GameloopService) { }
  
  
  @HostListener('window:keydown', [('$event')])
  
  moves(event: KeyboardEvent) {
    event.preventDefault();
    
    if (event.keyCode === 38) {
      
      console.log('up');
      this.gs.player1.move = MOVE_TOP;
    }
    if (event.keyCode === 39) {
      
      console.log('right');
      this.gs.player1.move = MOVE_RIGHT;
    }
    if (event.keyCode === 40) {
      
      console.log('down');
      this.gs.player1.move = MOVE_BOT;
    }
    if (event.keyCode === 37) {
      
      console.log('left');
      this.gs.player1.move = MOVE_LEFT;
    }
    if (event.keyCode === 32) {
      console.log('bomb');
      this.gs.player1.bomb = DROP_BOMB;
    }
    if (event.keyCode === 13) {
      console.log('pause');
      this.gs.player1.pause = PAUSED;
    }
    

    
    if (event.keyCode === 90) {
      
      console.log('up');
      this.gs.player2.move = MOVE_TOP2;
    }
    if (event.keyCode === 68) {
      
      console.log('right');
      this.gs.player2.move = MOVE_RIGHT2;
    }
    if (event.keyCode === 83) {
      
      console.log('down');
      this.gs.player2.move = MOVE_BOT2;
    }
    if (event.keyCode === 81) {
      
      console.log('left');
      this.gs.player2.move = MOVE_LEFT2;
    }
    if (event.keyCode === 16) {
      console.log('bomb');
      this.gs.player2.bomb = DROP_BOMB2;
    }
    if (event.keyCode === 13) {
      console.log('pause');
      this.gs.player2.pause = PAUSED;
    }
    
  }
  
  @HostListener('window:keyup', [('$event')])
  
  stopmove(event: KeyboardEvent) {
    event.preventDefault();
    
    if (event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40 || event.keyCode === 37) {
      console.log('stop');
      this.gs.player1.move = MOVE_STAND;
    }
    if (event.keyCode === 90 || event.keyCode === 68 || event.keyCode === 83 || event.keyCode === 81) {
      console.log('stop');
      this.gs.player2.move = MOVE_STAND2;
    }
    
  }
  
  ngOnInit() {
    this.gameloop.loop();
    
  }
  
}
