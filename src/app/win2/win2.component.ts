import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';
import { GameloopService } from '../gameloop.service';

@Component({
  selector: 'app-win2',
  templateUrl: './win2.component.html',
  styleUrls: ['./win2.component.scss']
})
export class Win2Component implements OnInit {
  

  constructor(public gs: GameStateService,public gameloop: GameloopService ) {}

  ngOnInit() {
    this.gs.reInit( );
    this.gs.reInitplayer();
  }

}
