import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { videos } from '../shared/models/video';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  videos: videos[] = [];
  constructor(private videoservice: VideoService) {}

  ngOnInit(): void {
    this.videos = this.videoservice.getAllVideo();
  }
  likeCounter(video: any) {
    video.like++;
  }
  dislikeCounter(video: any) {
    video.dislike++;
  }
}
