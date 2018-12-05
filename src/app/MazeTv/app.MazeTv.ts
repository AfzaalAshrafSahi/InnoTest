
import { Component,ElementRef,OnInit} from '@angular/core';
 
 import {Router}  from '@angular/router';
 import { AuthService } from './auth.service';
import * as $ from 'jquery';
import { AlertPromise } from 'selenium-webdriver';
@Component({
  selector: 'app-roots',
    templateUrl: './app.MazeTv.html', 
    //template: `<h1> it should work</h1>`, 
   styleUrls:['./app.MazeTv.scss'],
 
 providers:[AuthService]
})
export class MazeTv implements OnInit  {
//   constructor(private _elementRef:ElementRef,private _viewSession:KeepSession,private router: Router){

//   }
//   UserName:string;
// ngOnInit(){
//    //alert(this._viewSession.UserName);
//   if(this._viewSession.UserName===null)
//   {
//     this.router.navigate(['/login']);
//         $(this._elementRef.nativeElement).find('#hideelement').hide();
//         $(this._elementRef.nativeElement).find('#hideelementname').hide();
        
//   }
// else{
//   alert(" npt null");
//   alert(this._viewSession.UserName);
//           this.UserName=this._viewSession.UserName;
//           $(this._elementRef.nativeElement).find('#hideelement').show();
//           $(this._elementRef.nativeElement).find('#hideelementname').show();
//   }
   
// }
// public isLoggedIn(): boolean{
//   let status = false;
//   if( localStorage.getItem('isLoggedIn') == "true"){
//     status = true;
//   }
//   else{
//     status = false;
//   }
//   return status;
// }
id: string;
  constructor(private router: Router,public authService: AuthService,private _elementRef:ElementRef) { }

  ngOnInit() {
   
//     if(localStorage.getItem('isLoggedIn')== "true"){

//       $(this._elementRef.nativeElement).find('#hideelement').show();
//       $(this._elementRef.nativeElement).find('#hideelementname').show();
//     }
//     else if (localStorage.getItem('isLoggedIn') == "false"){
     
// $(this._elementRef.nativeElement).find('#hideelement').hide();
//       $(this._elementRef.nativeElement).find('#hideelementname').hide();
//       this.router.navigate(['/login']);
//     }    
     
///////////////////////////////////////////
    // this.id = localStorage.getItem('token');
    // if(!this.id){
    //   console.log("succcccccccccccccccccccccceeeeeeeeeeeeesssssssss");
    //   this.router.navigate(['/login']);
     

    // }
    // else{
    //   console.log("Failllllllllllllllllllllllllllllll");
    //   this.router.navigate(['/login']);
      // $(this._elementRef.nativeElement).find('#hideelement').show();
      //  $(this._elementRef.nativeElement).find('#hideelementname').show();
      // $(this._elementRef.nativeElement).find('#hideelement').hide();
      // $(this._elementRef.nativeElement).find('#hideelementname').hide();

    //}
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

 