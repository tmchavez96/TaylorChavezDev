import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    this.playVideo()
  }

  playVideo() {
    const video: HTMLVideoElement = this.videoplayer.nativeElement;
    video.muted = true;
    video.play();
  }

}
