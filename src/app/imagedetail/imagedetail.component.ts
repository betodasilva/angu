import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationStart } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TempdataService } from '../tempdata.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-imagedetail',
  templateUrl: './imagedetail.component.html',
  styleUrls: ['./imagedetail.component.css']
})
export class ImagedetailComponent implements OnInit {
  image: any;
  url: string;
  active: boolean = false;
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    public tempData: TempdataService,
    private location: Location ) { }

  ngOnInit() {
    
    let result;
    if ( this.tempData.imageList ) {
      this.image = this.tempData.imageList.find( (img, index) => {
        return img.id === this.route.snapshot.params.id;
      });
    } else {
      this.tempData.getPhoto(this.route.snapshot.params.id).subscribe( (data: any) => {   
        this.image = data;
      } );
    }

    console.log( this.image );
  }

  closeModal(){
    document.querySelector('.modal').classList.remove('is-active');
    this.location.back();
  }



}
