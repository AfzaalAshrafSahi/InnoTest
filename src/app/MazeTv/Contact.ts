import { Component } from '@angular/core';
import { User } from '../user';
 
@Component({
  selector: 'app-contacts',
  templateUrl: './Contact.html',
// template: `<h1>this is the individual page</h1>
// <button class="btn btn-primary">submit</button>
// `,
 // styleUrls:['./Contact.scss']
  
 

})
export class Contact {
    topics=['Angular','Vue','React'];
    topicHasError=true;
    userModel=new User('afzaal','afzaalsahi81@gmail.com','0347630370','','morning',true)
  
    validateTopic(value){

      if(value==="default")
      { this.topicHasError=true;

      }
      else{
        this.topicHasError=false;
      }
    }
    submit():void{

         alert("submitted successfully");
      }
} 

 
 