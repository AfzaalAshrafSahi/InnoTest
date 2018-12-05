import { Component,ElementRef, OnInit ,Input} from '@angular/core';
import {moviesdetailservice} from './MoviesDetailServices';
import {ActivatedRoute} from "@angular/router";
import * as $ from 'jquery';
@Component({
  selector: 'app-detail',
  templateUrl: './IndividualDetail.html',
//template: `<h1>this is the individual page</h1>`,
  styleUrls:['./IndividualDetail.scss']
  
 
})
export class IndividualDetail implements OnInit {
    rootnode:any;
    MovieDetail;
  
      constructor(rootnode:ElementRef,private _MoviesService :moviesdetailservice,private _activatedRoute:ActivatedRoute){
    
        this.rootnode=rootnode;
      }
      ngOnInit(){
          let movieCode:string=this._activatedRoute.snapshot.params['id'];
        this._MoviesService.getIndivisualMoviesDetail("girls")
        .subscribe(data=>this.MovieDetail=data);
       // .subscribe(data=>console.log("working",data));
               // $(this.rootnode.nativeElement).find("button").on('click',function(){alert('working')})
}    
} 

 
 