import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('count-app');
  title:string = "counter app";
  count:number = 0;
  even:string = "even";
  odd:string = "odd"
  text = ""


  textRebuild(){
      if(this.count % 2 == 0 ){
   return "EVEN"
  }
  else {
    // this.text = this.odd
    return "ODD"

  }
  }

 add() {
  this.count++;
 


 }
 sub(){
  this.count--;


  

 }
 reset(){
  this.count=0;

 }
}
