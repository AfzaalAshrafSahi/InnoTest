
import { Component,ElementRef, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {  FormGroup } from '@angular/forms';

import * as $ from 'jquery';
import {loginservice} from './LoginService';
 
import {AuthService } from './auth.service';
@Component({
  selector: 'app-login',
 templateUrl: './Login.html',
 //template: `<h1>this is login page</h1>`,
  styleUrls:['./Login.scss'],
  providers:[loginservice]
})

export class Login implements OnInit {

  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  constructor( public authService: AuthService,private _employees:loginservice,private router: Router,private _elementRef:ElementRef){

    
  }
 
UserName:string ;
  ngOnInit(){
    localStorage.setItem('isLoggedIn', "false");
    localStorage.RemoveItem('token')
    // this.returnUrl = '/dashboard';
    // this.authService.logout();
    

  }
  // get f() { return this.loginForm.controls; }

   onclick( ):void{
     
    var id=$(this._elementRef.nativeElement).find('#inputEmail');
    var password=$(this._elementRef.nativeElement).find('#inputPassword');
    this.UserName=this._employees.LoginEmployee(id.val(),password.val())
    if(this.UserName!==""){
      console.log("Login successful");
      
      //this.authService.authLogin(this.model);
      $(this._elementRef.nativeElement).find('#hideelement').show();
      $(this._elementRef.nativeElement).find('#hideelementname').show();
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', this._employees.LoginEmployee(id.val(),password.val()));
      this.router.navigate(['/Movies']);
    }
    else{
      
      alert("Please check your userid and password");
      this.message = "Please check your userid and password";
    }
  }
    // var id=$(this._elementRef.nativeElement).find('#inputEmail');
    // var password=$(this._elementRef.nativeElement).find('#inputPassword');
   
    // var log=this._employees.LoginEmployee(id.val(),password.val());
    // if( log===""){
      
    //  // alert(log);
    //   alert("Invalid User");
    // }
    // else{
    //  // alert(log);
    //         //this._keepsession.UserName=log;
    //         localStorage.setItem('isLoggedIn', "true");
    //     localStorage.setItem('token', log);
    //         this.router.navigate(['/Movies']);
    }
  //  alert(name.val());
    // $(this._elementRef.nativeElement).find('button').on('click',function(){ alert("It Works");})
    // this.router.navigate(['/employees']);
//     alert("");
// console.log("stage1");
//      //event.prevantDefault();
//   // console.log(event);
//    console.log("stageLast");
    //  if(this._employees.LoginEmployee()==="success"){
    //    alert("valid");
    //    this.router.navigate(['/employees']);
    //  }
    //  else{
    //    alert("Invalid")
    //   }
   

   
  // title = 'TvMazeapp';
 
 