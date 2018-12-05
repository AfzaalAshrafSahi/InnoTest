import { Component ,ElementRef, OnInit} from '@angular/core';
import {Movies} from './MoviesInterface';
import * as $ from 'jquery';
  import {moviesdetailservice} from './MoviesDetailServices';
 

@Component({
  selector: 'personal-detail',
templateUrl:'./PersonalDetail.html',
//template:`<h1>this is personal detail page</h1>`,
  styleUrls:['./PersonalDetail.scss'],
  providers:[moviesdetailservice]
 
})
export class PersonalDetail implements OnInit  {
   PersonalDetail ;
   
    constructor(private _MoviesService :moviesdetailservice,private _elementRef:ElementRef){
  
      
    }
   
  
    ngOnInit(){
      
    //   if(localStorage.getItem('isLoggedIn')){

    //   // alert(localStorage.getItem('token'));
    //   }    
       
        $(this._elementRef.nativeElement).find('#hideelement').show();
        $(this._elementRef.nativeElement).find('#hideelementname').show();
        this._MoviesService.getMoviesDetail()
         .subscribe(data=>this.PersonalDetail=data);
        //.subscribe(data=>console.log(data));
        // console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        // this.PersonalDetail=this._MoviesService.getMoviesDetail();
//     this.PersonalDetail= [{"score":17.367085,"show":{"id":139,"url":"http://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.7},"weight":94,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1543140952,"_links":{"self":{"href":"http://api.tvmaze.com/shows/139"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1079686"}}}}
//    ];
   //console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
    }
}

 