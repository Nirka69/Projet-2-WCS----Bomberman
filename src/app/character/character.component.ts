import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {


  @HostListener('window:keydown', [('$event')])

  move(event: KeyboardEvent) {
    event.preventDefault();

    if (event.keyCode === 38) {
      console.log('up');
    }
    if (event.keyCode === 39) {
      console.log('right');
    }
    if (event.keyCode === 40) {
      console.log('down');
    }
    if (event.keyCode === 37) {
      console.log('left');
      this.increment();
    }
  }

  @HostListener('window:keyup', [('$event')])

  stopmove(event: KeyboardEvent) {
    event.preventDefault();

    if (event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40 || event.keyCode === 37 ) {
      console.log('stop');
    }

  }

constructor( ) { }




increment() {

}

ngOnInit() {
  }

}
