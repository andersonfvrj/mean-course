import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {

  newPost = 'NO CONTENT';
  enteredValue = "";

  onAddPosts() {
    this.newPost = this.enteredValue;
  }
}
