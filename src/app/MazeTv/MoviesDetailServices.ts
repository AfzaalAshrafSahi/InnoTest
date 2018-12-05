import {Injectable} from '@angular/core'
import {Movies} from './MoviesInterface'
import {HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs';
//import 'rxjs/add/operator/Map';



@Injectable()
export class moviesdetailservice{

    private _url:string="http://api.tvmaze.com/search/shows?q=girls";
    private _Singleurl:string="http://api.tvmaze.com/singlesearch/shows?q=";
    constructor(private _http:HttpClient )
    {

    }
    // MoviesList: any[]=
    // [{"score":17.367085,"show":{"id":139,"url":"http://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.7},"weight":94,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1543140952,"_links":{"self":{"href":"http://api.tvmaze.com/shows/139"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1079686"}}}}
    // ];
    // getMoviesDetail():any[]{
    //    return [{"score":17.367085,"show":{"id":139,"url":"http://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.7},"weight":94,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1543140952,"_links":{"self":{"href":"http://api.tvmaze.com/shows/139"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1079686"}}}}
    //     ];

 
    getMoviesDetail()  {
                return this._http.get (this._url);
    }
     getIndivisualMoviesDetail(MovieCode:string)  {
       //console.log("working",this._http.get(this._Singleurl));
                    return this._http.get(this._Singleurl+""+MovieCode.toLowerCase());
               // .map((response:Response)=> <Movies[]>response.json());
    
   }
}