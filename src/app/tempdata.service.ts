import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TempdataService {

  public query: string = null; 
  public imageList: any;
  queryUrl: string = 'https://api.unsplash.com/search/photos/';
  options: any = {
    params: {
      client_id: '03c59cb1c3654305eb8f8c55ebe6ce85529612eea2506d6c97c9dfdf631cbe9d',
      query: this.query
    }
  };

  constructor(private http: HttpClient) { }


  getPhotos( query: string ){
    this.options.params.query = query; 
    
    return this.http.get( this.queryUrl, this.options );
  }

  getPhoto( id: string ) {
    this.options.params.query = "";
    this.queryUrl = `https://api.unsplash.com/photos/${id}`;
    return this.http.get( this.queryUrl, this.options );
  }

}
