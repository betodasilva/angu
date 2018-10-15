import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  queryUrl: string = 'https://api.unsplash.com/search/photos?query=';
  result: string = "";
  query: string = "";
  options: any = {
    params: {
      client_id: '03c59cb1c3654305eb8f8c55ebe6ce85529612eea2506d6c97c9dfdf631cbe9d',
      query: this.query
    }
  };
  @Output() results: EventEmitter<Object> = new EventEmitter();

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
  }

  search( query: any ) {

    this.options.params.query = query;    
    let obs = this.http.get( this.queryUrl, this.options );
    obs.subscribe( (data: any) => {   
      this.results.emit( data.results );
    } );
  }

}
