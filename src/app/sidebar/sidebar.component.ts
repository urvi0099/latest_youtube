import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() sidenavstatus: boolean = false;
  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'material-icons',
      pic: 'home',
      link: '/home',
    },
    {
      number: '2',
      name: 'Explore',
      icon: 'material-icons',
      pic: 'explore',
      link: '/explore',
    },
    {
      number: '3',
      name: 'Subscriptions',
      icon: 'material-icons',
      pic: 'subscriptions',
    },
    {
      number: '4',
      name: 'Library',
      icon: 'material-icons',
      pic: 'library_add_check',
    },
    {
      number: '5',
      name: 'History',
      icon: 'material-icons',
      pic: 'history',
    },
    {
      number: '6',
      name: 'Your videos',
      icon: 'material-icons',
      pic: 'play_arrow',
    },
    {
      number: '7',
      name: 'Watch Later',
      icon: 'material-icons',
      pic: 'watch_later',
    },
    {
      number: '8',
      name: 'Liked videos',
      icon: 'material-icons',
      pic: 'thumb_up',
    },
  ];
  constructor(private router: Router, private activaterouted: ActivatedRoute) {}
  ngOnInit(): void {}
}
