import { NgModule } from '@angular/core';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';


@NgModule({
  declarations: [DomSanitizerPipe, ImageSanitizerPipe, ImagenPipe],
  exports: [
    DomSanitizerPipe, ImageSanitizerPipe, ImagenPipe
  ]
})
export class PipesModule { }
