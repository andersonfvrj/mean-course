import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  /* posts = [
    {title: "Primeiro post", content: "Este é o conteúdo do primeiro post."},
    {title: "Segundo post", content: "Este é o conteúdo do segundo post."},
    {title: "Terceiro post", content: "Este é o conteúdo do terceiro post."},
  ]; */

  @Input() posts: Post[] = [];

}
