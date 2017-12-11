import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule,MatCardModule,MatButtonModule} from '@angular/material';
import {NavService } from './main/nav.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { LoginService } from './auth/login.service';
import { expect } from 'chai';
import mockery from 'mockery';
import fetch, { mock } from 'mock-fetch';
import { ArticlesService } from './article/articles.service';
import { HttpModule } from '@angular/http';
import{ProfileService} from './profile/profile.service'
import{CommentService} from './article/comment.service'
const routes: Routes = [
    {path: 'auth', component:AuthComponent},
    {path: 'main',component:MainComponent},
    {path: 'profile',component:ProfileComponent},
    {path:'',redirectTo:'/auth',pathMatch:'full'}
   
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AuthComponent,
    MainComponent,
    ProfileComponent,
  ],
  imports: [
  
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports:[
    RouterModule
  ],
  providers: [CommentService,NavService,LoginService,ArticlesService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
