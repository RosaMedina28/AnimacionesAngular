import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'teal'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        top: 0,
        backgroundColor: 'green'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('closed <=> open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AnimacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = true;

  eventoOpen() {
    this.isOpen = !this.isOpen;
  }


}

