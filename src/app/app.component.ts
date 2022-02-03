import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  home:any;
  message:any;
  homeShow!:boolean;
  messageShow!:boolean;
  items:any;


  constructor(private primengConfig: PrimeNGConfig){

  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.home=localStorage.getItem('homeOPen');
    this.message=localStorage.getItem('messageOPen');
    console.log(this.home+" "+this.message)
    if(this.home=='true'){
      this.homeShow=true;
      this.messageShow=false;
    }else{
      this.messageShow=true;
      this.homeShow=false;
    }

  }

  homeOpen(){
    this.homeShow=true;
    this.messageShow=false;
    this.home=localStorage.setItem('homeOPen','true');
    this.message=localStorage.removeItem('messageOPen');
  }
  messageOpen(){
    this.homeShow=false;
    this.messageShow=true;
    this.home=localStorage.removeItem('homeOPen');
    this.message=localStorage.setItem('messageOPen','true');
  }
  query = window.matchMedia("(max-width: 400px)");
}
