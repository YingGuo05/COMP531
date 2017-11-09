import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ShareService } from '../share.service';
import {Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'; 
import { resource } from '../../profileActions'
@Injectable()
export class ArticlesService {
  constructor(private share:ShareService,private http:Http,private http1:HttpClient) { 
  }
  //delete article from articles
  deleteArticle(articles:any,name:string):any{
    for(var i = 0 ;i < articles.length;i++){
      if(articles[i]['author'] == name){
        articles.splice(i,1);
      }
    }
    return articles;
  }
  //display the certain articles
  filter(articles:Array<any>,keywords:string):any{
    if(keywords){
      articles.forEach(function(art){
        if(art['author'].indexOf(keywords) == -1 
          &&art['text'].indexOf(keywords) == -1){
            art['display'] = false;
          }
      })
    }else{
      articles.forEach(function(art){
        art['display'] = true;
      })
    }
    return articles;
  }

}
