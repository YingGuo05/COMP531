import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise'; 
import { resource,getArticles } from '../../profileActions'
@Injectable()
export class ArticlesService {
  constructor() { 
  }
 
  filter(keywords:string){
    getArticles(-1)
    .then(res=>{
      var articles = res.articles
      if(keywords){
        articles.forEach(function(art){
                if((art['author'].indexOf(keywords) == -1 
                  && art['text'] && art['text'].indexOf(keywords) == -1)||!art['text']){
                    let a = document.getElementById(art._id+"controlArticle")
                    a.style.display = 'none'
                  }
              })
      }else{
        articles.forEach(function(art){
                let a = document.getElementById(art._id+"controlArticle")
                a.style.display = 'block'
              })
      }
    })
    
  }

  editArticle(id){
    let editedArticle = document.getElementById(id+"article")
    let newText = editedArticle.innerText
    return newText
  }

}
