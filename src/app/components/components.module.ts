import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule, IonicModule, PipesModule
  ], 
  exports: [
    PostsComponent
  ]
})
export class ComponentsModule { }
