import { Injectable } from '@angular/core';

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
  constructor() { }
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

  addNewComment(id,):any{
    let addNew = document.getElementById(id+"newcomment");
    if(addNew.style.display = 'none'){
      addNew.style.display = 'block';
  }}
 

  editComment(id1,id2){
   
    let newCom = document.getElementById("art"+id1+"comment"+id2)
    let text = newCom.innerText
    return text
  }
}

  

