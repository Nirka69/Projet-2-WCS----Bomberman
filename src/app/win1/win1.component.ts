import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';
import { GameloopService } from '../gameloop.service';

@Component({
  selector: 'app-win1',
  templateUrl: './win1.component.html',
  styleUrls: ['./win1.component.scss']
})
export class Win1Component implements OnInit {

  constructor(public gs: GameStateService,public gameloop: GameloopService ) {}

  ngOnInit() {
    this.gs.reInit();
    this.gs.reInitplayer();
    this.gs.reInitConteur();  
  }

}
