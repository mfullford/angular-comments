import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
      {phrase: 'First comment!',
      author: 'Penelope'
  		},
      {phrase: 'Nice work!',
      author: 'Lancelot'
		},
      {phrase: 'I would also like to congratulate you!',
      author: 'Arthur'
  	}
  ];

  editValue= true;

  constructor() { }

  ngOnInit() {

  }

  addComment(newPhrase, newAuthor) {
  		let newComment = {
  			phrase : newPhrase, 
  			author : newAuthor};
  		console.log(newComment)
  		this.comments.push(newComment);
  }

  deleteComment(comment) {
  		for (let i=1; i<this.comments.length; i++) {
  			if (this.comments[i].phrase === comment.phrase)
  			this.comments.splice(i, 1)
  		}
  }

  editComment() {
  		this.editValue = null;
  		console.log(this.editValue);
  }
}
