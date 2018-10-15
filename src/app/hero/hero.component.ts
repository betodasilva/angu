import { Component, OnInit } from '@angular/core';
import { TempdataService } from '../tempdata.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  results: any;
  constructor(public tempData: TempdataService) { }

  ngOnInit() {
  }

  displayResults( results ) {
    this.results = results;
  }

}
