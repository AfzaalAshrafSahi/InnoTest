import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {KeepSession} from './MazeTv/SessionService';
import {HttpClientModule} from '@angular/common/http';
import {moviesdetailservice} from './MazeTv/MoviesDetailServices';
import { AuthGuard } from './MazeTv/auth.guard';
import { AuthService} from './MazeTv/auth.service';
 
import { FormsModule} from '@angular/forms';
import {Contact} from './MazeTv/Contact';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MazeTv} from './MazeTv/app.MazeTv';
import {Login} from './MazeTv/Login';
import {PersonalDetail} from './MazeTv/PersonalDetail';
import {IndividualDetail} from './MazeTv/IndividualDetail';
 
 

 


@NgModule({
  declarations: [
    AppComponent,MazeTv,Login,Contact,PersonalDetail,IndividualDetail 
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule
    
  ],
  providers: [moviesdetailservice ,AuthGuard,AuthService],
  bootstrap: [MazeTv]
})
export class AppModule { }
