import { Component, OnInit, HostListener } from '@angular/core';
import { GameStateService, MOVE_TOP, MOVE_RIGHT, MOVE_BOT, MOVE_LEFT } from '../game-state.service';
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
      this.decrementhb();
      console.log('up');
      this.gs.move = MOVE_TOP;
    }
    if (event.keyCode === 39){
      this.incrementlf();
      console.log('right');
      this.gs.move = MOVE_RIGHT;
    }
    if (event.keyCode === 40) {
      this.incrementhb();
      console.log('down');
      this.gs.move = MOVE_BOT;
    }
    if (event.keyCode === 37) {
      this.decrementlf();
      console.log('left');
      this.gs.move = MOVE_LEFT;
    }
  }

  @HostListener('window:keyup', [('$event')])

  stopmove(event: KeyboardEvent) {
    event.preventDefault();

    if (event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40 || event.keyCode === 37) {
      console.log('stop');
      this.gs.move = 0;
    }

  }

  ngOnInit() {

    this.gameloop.play();
  }

 
}
