import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { YoutubeService } from '../services/youtube.service';
import { Observable } from 'rxjs';
import { AuthResponse } from '../appinterface/auth-response.interface';

declare var window: any; ////bts

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: YoutubeService
  ) {
    this.signform = this.fb.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        cpassword: new FormControl('', Validators.required),
      },
      {
        validators: this.mustMatch('password', 'cpassword'),
      }
    );
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal( ////bts
      document.getElementById('exampleModal') ////bts
    );
  }

  // user: any = {}

  formModal: any; ////bts
  // ****************   bts   *********
  openmodal() {
    this.formModal.show();
  }

  hidemodal() {
    this.formModal.hide();
  }

  // ****************   bts   *********

  ///// Getter method for all form controls
  get name() {
    return this.signform.get('name') as FormControl;
  }

  get email() {
    return this.signform.get('email') as FormControl;
  }

  get password() {
    return this.signform.get('password') as FormControl;
  }

  get cpassword() {
    return this.signform.get('cpassword') as FormControl;
  }

  signupuser() {
    localStorage.setItem('username', this.signform.value.name);
    localStorage.setItem('email', this.signform.value.email);
    localStorage.setItem('password', this.signform.value.password);
    this.signform.reset();
  }

  // password and confirm password validation

  mustMatch(password: any, cpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const conpasswordcontrol = formGroup.controls[cpassword];
      if (
        conpasswordcontrol.errors &&
        !conpasswordcontrol.errors['mustMatch']
      ) {
        return;
      }
      if (passwordcontrol.value !== conpasswordcontrol.value) {
        conpasswordcontrol.setErrors({ mustMatch: true });
      } else {
        conpasswordcontrol.setErrors(null);
      }
    };
  }
}
