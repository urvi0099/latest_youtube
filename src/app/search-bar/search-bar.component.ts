import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(
    private searchservice: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  search: string = 'search here...';
  ngOnInit(): void {}
}
