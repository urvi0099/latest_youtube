import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-right',
  templateUrl: './header-right.component.html',
  styleUrls: ['./header-right.component.css'],
})
export class HeaderRightComponent implements OnInit {
  loggedinuser: string | null = ' ';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  loggedin() {
    this.loggedinuser = localStorage.getItem('username');
    return this.loggedinuser;
  }
  onlogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['/home']);
  }
}
