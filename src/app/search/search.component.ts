import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TempdataService } from '../tempdata.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  
  
  @Output() results: EventEmitter<Object> = new EventEmitter();

  constructor(private http: HttpClient, public tempData: TempdataService) {
    
  }

  ngOnInit() {
  }

  search( query: any ) {
    // this.tempData.query = query;
    // this.options.params.query = query;    
    // let obs = this.http.get( this.queryUrl, this.options );
    this.tempData.getPhotos( query ).subscribe( (data: any) => {   
      this.tempData.imageList = data.results;
      this.results.emit( data.results );
    } );
  }

}
