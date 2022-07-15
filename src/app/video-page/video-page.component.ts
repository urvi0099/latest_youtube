import { Component, OnInit } from '@angular/core';
import { videos } from '../shared/models/video';
import { VideoService } from '../services/video.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css'],
})
export class VideoPageComponent implements OnInit {
  videos: videos[] = [];
  userExist = localStorage.getItem('username');
  subscribe = true;
  Subscribe = 'SUBSCRIBE';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videoservice: VideoService,
    private clipboard: ClipboardService
  ) {
    route.params.subscribe((params) => {
      if (params['id']) this.video = videoservice.getVideoById(params['id']);
    });
  }
  ngOnInit(): void {
    this.videos = this.videoservice.getAllVideo();
  }
  video!: videos;
  urlcopied: boolean = false;
  likeCounter(video: any) {
    video.like++;
  }
  copyUrl() {
    this.clipboard.copyFromContent(window.location.href);
    this.urlcopied = true;
    setTimeout(() => {
      this.urlcopied = false;
    }, 2000);
  }
  userSubscribe() {
    this.subscribe = !this.subscribe;
    this.Subscribe = this.subscribe ? 'SUBSCRIBE' : 'SUBSCRIBED';
  }
  disLike(){
    
  }
}
