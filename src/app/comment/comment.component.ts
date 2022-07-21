import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  userExist = localStorage.getItem('username');
  constructor() {}
  comment: string = ' ';
  ngOnInit(): void {}
  postComment: string[] = [];
  save() {
    this.postComment.push(this.comment);
    this.comment = ' ';
  }
  cancel() {}
}
