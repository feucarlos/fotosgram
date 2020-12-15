import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  posts: Post[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit(){

    this.postService.getPosts().subscribe( resp => {
        console.log(resp);
        this.posts.push(...resp.post);
    });

  }

}
