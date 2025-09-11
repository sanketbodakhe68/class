import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
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
  
  test = true


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
