import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { VideoService } from '../services/video.service';
import { videos } from '../shared/models/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: videos[] = [];
  constructor(
    private searchservice: SearchService,
    private router: Router,
    private route: ActivatedRoute,
    private videoservice: VideoService
  ) {}

  ngOnInit(): void {
    this.videos = this.videoservice.getAllVideo();
  }
  filterTerm: string = ' ';
}
