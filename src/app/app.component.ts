import { Component, Output, EventEmitter } from '@angular/core';
import { GameStateService } from './game-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BombermanV2';

  

public counterValue: number = 1;
public counterfinal: number = 5;
  
constructor(){
  
  
  let looperfire = setInterval(() =>{
    this.counterValue =this.counterValue +1;
    if(this.counterValue >=5){
      clearInterval(looperfire)
    }
  },15000);
  
  }

};


  
