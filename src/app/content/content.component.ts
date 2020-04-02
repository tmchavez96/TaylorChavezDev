import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild('navBar',{static:true}) private navBar;

  navBool:Boolean = false
  constructor() {
  }

  ngOnInit() {
  }

  toggleNavBar(){
    if(this.navBool){
      this.navBar.nativeElement.style.marginLeft = "-100%";
    }else{
      this.navBar.nativeElement.style.marginLeft = "0%";
    }
    this.navBool = !this.navBool
  }

}
