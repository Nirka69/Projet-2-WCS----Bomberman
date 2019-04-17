import { Component, OnInit, HostListener, Input } from '@angular/core';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

 
  valuelf=0;
  valuehb=0;
  constructor() { }

  @HostListener("window:keydown", [('$event')])
  move(event:KeyboardEvent) {
    event.preventDefault()
    
    if (event.keyCode === 38) {
      this.decrementhb();
      console.log('up');
    }
    if (event.keyCode === 39){
      this.incrementlf();
      console.log('right');
    }
    if (event.keyCode === 40) {
      this.incrementhb();
      console.log('down');
    }
    if (event.keyCode === 37) {
      this.decrementlf();
      console.log('left');
    }
    
  }

  @HostListener("window:keyup", [('$event')])

  stopmove(event:KeyboardEvent) {
    event.preventDefault()

    if (event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40 || event.keyCode === 37 ) {
      console.log('stop');
    }
    
  }

  incrementlf(){
    this.valuelf+=32;
    if(this.valuelf >=672){
      this.valuelf +=-32
    }
    console.log(this.valuelf);
  }

  incrementhb(){
    this.valuehb+=32;
    if(this.valuehb >=448){
      this.valuehb +=-32}
    console.log(this.valuehb);
  }
  
  decrementlf(){
    this.valuelf-=32;
    if(this.valuelf <=0){
      this.valuelf +=32}
    console.log(this.valuelf);
  }
  
  decrementhb(){
    this.valuehb-=32;
    if(this.valuehb <=0){
      this.valuehb +=32}
    console.log(this.valuehb);
  }
  
  

  ngOnInit() {
    
  }

 
}
