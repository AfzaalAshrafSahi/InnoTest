import {Injectable} from '@angular/core'
@Injectable()
export class loginservice{

    loginEmployees: any[]=
        [
        {name:"Afzaal",mailId:"afzaalsahi@gmail.com",password:'abc123'},
        {name:"Aslam",mailId:"aslam@gmail.com",password:'def123'},
    ];
    
LoginEmployee(id:string,name:string):string{
//console.log("ssssssssssssssssssssssssssssssssssssssss");

    var skinName =  this.loginEmployees.find(x=>x.mailId === id && x.password===name);
    if(skinName){
                    console.log(skinName);
                  return  this.loginEmployees.find(x=>x.mailId === id && x.password===name).name}
       
        else {
            return  "";
            }
}
}