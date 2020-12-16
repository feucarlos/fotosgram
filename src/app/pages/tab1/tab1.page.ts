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
  infScrHabilitado = true;

  constructor(private postService: PostsService) {}

  ngOnInit(){
    this.siguientes();
  }

  recargar( event ){
    this.infScrHabilitado = true;
    this.siguientes( event, true );

  }

  siguientes( event?, pull: boolean = false ) {

    if (pull) {
      this.posts = [];
    }

  this.postService.getPosts( pull ).subscribe( resp => {
      console.log(resp);
      this.posts.push(...resp.post);

      if (event){
        event.target.complete();
        if ( resp.post.length === 0 ){
          this.infScrHabilitado = false;
        }
      }

  });



  }

}
