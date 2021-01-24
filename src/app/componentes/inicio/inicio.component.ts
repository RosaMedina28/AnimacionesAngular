import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '800px',
        opacity: 1,
        backgroundColor: 'teal'
      })),
      state('closed', style({
        height: '800px',
        opacity: 1,
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
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOpen = true;

  eventoOpen() {
    this.isOpen = !this.isOpen;
  }

}
