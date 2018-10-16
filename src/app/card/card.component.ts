import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardLoaded', [
      state('notloaded', style({
        transform: 'translateY(-100px)',
        opacity: 0
      })),
      state('loaded', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('notloaded <=> loaded', animate('280ms ease-in-out'))
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() result: any;
  state: string = 'notloaded';

  constructor() { }

  ngOnInit() {
    
  }

  changeStateOnImageLoad(){
    this.state = 'loaded';
  }

}
