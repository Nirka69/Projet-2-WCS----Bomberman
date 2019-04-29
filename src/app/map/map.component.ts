
import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';
import { GameloopService } from '../gameloop.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {



  constructor(private gs: GameStateService, private gl: GameloopService, private ms: MapService) { }

  ngOnInit() {
  }

}
