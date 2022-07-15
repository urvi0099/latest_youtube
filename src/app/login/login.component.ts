import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../appinterface/auth-response.interface';
import { YoutubeService } from '../services/youtube.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  useremail: string | null = ' ';
  userpassword: string | null = ' ';
  constructor(private router: Router, private auth: YoutubeService) {}

  @Output('change') change = new EventEmitter();
  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  loginuser() {
    this.useremail = localStorage.getItem('email');
    this.userpassword = localStorage.getItem('password');
    if (
      this.useremail == this.loginform.value.email &&
      this.userpassword == this.loginform.value.password
    ) {
      alert('Login Successful');
      this.router.navigate(['/home']);
    } else {
      alert('User email or password is wrong.');
    }
    this.loginform.reset();
  }
  get email() {
    return this.loginform.get('email') as FormControl;
  }
  get password() {
    return this.loginform.get('password') as FormControl;
  }
}
