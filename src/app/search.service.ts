import { Injectable } from '@angular/core';
import { VideoService } from './services/video.service';
import { videos } from './shared/models/video';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private videoservice: VideoService) {}
  sharedData: string = ' ';
  
}
