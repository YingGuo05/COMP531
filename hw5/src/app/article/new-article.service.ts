import { Injectable } from '@angular/core';
import { ShareService } from '../share.service';
@Injectable()
export class NewArticleService {
  p={
    _id:'123',
    text:'123',
    img:'',
    comments:[],
    date:'2017-10-07',
    author:'YING',
    display:true
  }
  constructor(private share : ShareService) { }
  //add new article to articles
  addNewArticle(author:string,articles:any,post:string):any{
    this.p.author = author;
    this.p.text = post;
    this.p.date = Date().toLocaleString();
    articles = articles.reverse();
    articles.push(this.p);
    articles = articles.reverse();
    return articles;
  }
  // create new articles
  createNew(author:string,post:string):any{
    this.p.author = author;
    this.p.text = post;
    this.p.date = Date().toLocaleString();
    return this.p;
  }
}
