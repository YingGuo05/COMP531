import { Injectable } from '@angular/core';
import { ShareService } from '../share.service';
@Injectable()
export class NewArticleService {
  p={
    _id:1234,
    text:'123',
    img:'',
    comments:[],
    date:'2017-10-07',
    author:'YING',
    display:true
  }
  constructor(private share : ShareService) { }
  //add new article to articles
  addNewArticle():any{
    
  }
}
