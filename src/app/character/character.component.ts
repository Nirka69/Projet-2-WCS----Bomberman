import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @HostListener('window :keyDown', ['$event']) moveCharacter(a) {

    const keyCode = a.keyCode;

    switch (keyCode) {

      // perso 1

      case 37:
      alert('ok' + '37');
      break;

      case 38:
      alert('ok' + '38');
      break;

      case 39:
      alert('ok' + '39');
      break;

      case 40:
      alert('ok' + '40');
      break;

        // perso 2
    }

  }
}
