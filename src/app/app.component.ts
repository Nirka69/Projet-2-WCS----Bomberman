import { Component, Output, EventEmitter } from '@angular/core';
import { GameStateService } from './game-state.service';
import { GameloopService } from './gameloop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BombermanV2';

/* public counterValue: number = 1; */
 
constructor(public gs: GameStateService,public gameloop: GameloopService ){
  }

  ngOnInit() {
 


}
 
};


  
