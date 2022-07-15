import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-left',
  templateUrl: './header-left.component.html',
  styleUrls: ['./header-left.component.css'],
})
export class HeaderLeftComponent implements OnInit {
  @Output() sidenavtoggled = new EventEmitter<boolean>();
  menustatus: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  sidenavtoggle() {
    this.menustatus = !this.menustatus;
    this.sidenavtoggled.emit(this.menustatus);
  }
}
