import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {
  btn ='';
  constructor() { }
  toggle(id:any):string{
    let comment = document.getElementById(id);
    if(comment.style.display=='none'){
      comment.style.display = 'block';
      this.btn="Close comments";
    }else{
      comment.style.display = 'none';
      this.btn="Display comments";
    }
    return this.btn
  }
}
