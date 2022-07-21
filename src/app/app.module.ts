import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AvatarModule } from 'ngx-avatar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExploreComponent } from './explore/explore.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderLeftComponent } from './header-left/header-left.component';
import { HeaderRightComponent } from './header-right/header-right.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SearchService } from './search.service';
import { VideoPageComponent } from './video-page/video-page.component';
import { ClipboardModule } from 'ngx-clipboard';
import { CommentComponent } from './comment/comment.component';
//============  Ngxs  =========
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    ExploreComponent,
    SearchBarComponent,
    HeaderLeftComponent,
    HeaderRightComponent,
    VideoPageComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AvatarModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ClipboardModule,
    //============  Ngxs  =========
    NgxsModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
