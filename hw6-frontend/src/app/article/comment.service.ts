import { Injectable } from '@angular/core';
import { ShareService } from '../share.service'
@Injectable()
export class CommentService {
  btn ='';
  comment = [];
  newComment={
    id:1,
    text:'',
    author:''
  }
  art;
  constructor(private share : ShareService) { }
  toggle(id:any){
    let comment = document.getElementById(id+"disbtn");
    if(comment.innerHTML == 'Display comments'){
      comment.innerHTML = "Close Comments"
      let comments = document.getElementById(id)
      comments.style.display = 'block'
    }
    
    else {
      comment.innerHTML = 'Display comments'
      let comments = document.getElementById(id)
      comments.style.display = 'none'
    }
    
  }
  // remove(article,id1:any,id2:any):any{
  //   let comment = document.getElementById(id1+"comment"+id2);
  //   comment.style.display = 'none';
  //   function validate(element) {
  //     if(element._id == id1)
  //       return true;
  //     else
  //       return false;
  //   }
  //   this.comment = article.find(validate).comments;
  //   if(this.comment){
  //     this.comment.forEach(element => {
  //       if(element.id == id2){
  //         element.display = false;
  //         console.log("success")
  //       }
  //     });
  //   }
  //   return article;
  // }
  addNewComment(id,):any{
    // console.log("add comment")
    let addNew = document.getElementById(id+"newcomment");
    if(addNew.style.display = 'none'){
      // console.log("add comment1")
      addNew.style.display = 'block';
      
    // } if(comment){
    //   console.log("add comment")
    //   this.art = this.addNewcomment(name,id,article,comment);
    //   return this.art;
    // }
    // return article;
    
  }}
  // addNewcomment(name,id,article,comment):any{
  //   function validate(element) {
  //     if(element._id == id)
  //       return true;
  //     else
  //       return false;
  //   }
  //   this.comment = article.find(validate).comments;
  //   this.comment.push({id:this.comment.length+1,text:comment,author:name,display:true});
  //   console.log(this.comment)
  //   article.find(validate).comments = this.comment;
  //   return article;
  // }

  editComment(id1,id2){
   
    let newCom = document.getElementById("art"+id1+"comment"+id2)
    let text = newCom.innerText
    return text
  }
}

  

