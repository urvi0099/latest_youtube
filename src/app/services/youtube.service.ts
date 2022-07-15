import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import { AuthResponse } from '../appinterface/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {}

  /* sign up  */
  signup(email: string, password: string) {
    // this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+config.API_KEY)
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }

  /* Log in */
  login(email: string, password: string) {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }

  /* Sign out */
  // logout() {
  // this.fireAuth.logout().then( () => {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // },err => {
  //   alert(err.message);
  // } )
  // }

  getChannels(channelName: any): Observable<any> {
    const API_KEY = 'AIzaSyDWX9VjLZwrdyT154ot7pDrvqXEWBf1D9A';
    //  const url=" https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDWX9VjLZwrdyT154ot7pDrvqXEWBf1D9A&part=snippet,contentDetails,statistics,status"

    const url =
      ' https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
      channelName +
      '&type=channel&key=' +
      API_KEY +
      '&maxResults=50';

    return this.http.get<any>(url);
  }
}
