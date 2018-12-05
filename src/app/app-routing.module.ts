import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import {Login} from './MazeTv/Login';
import {PersonalDetail} from './MazeTv/PersonalDetail';
import {IndividualDetail} from './MazeTv/IndividualDetail';
import {Contact} from './MazeTv/Contact';
const routes: Routes = [
   
  {path:'login',component:Login},
  {path:'Movies',component:PersonalDetail},
  {path:'Contact',component:Contact},
  
  {path:'Movies/MovieDetail/:id',component:IndividualDetail},
  
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:Login}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
