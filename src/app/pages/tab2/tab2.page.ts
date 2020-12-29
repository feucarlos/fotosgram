import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImages: string[] = [];

  post = {
    mensaje: '',
    coords: null,
    posicion: false
  };

  constructor(private postsService: PostsService,
              private navCtrl: NavController) { }

  async crearPost() {
    console.log(this.post);
    const creado = await this.postsService.crearPost(this.post);

    this.post = {
      mensaje: '',
      coords: null,
      posicion: false
    }

    this.navCtrl.navigateRoot('/main/tabs/tab1');
  }

}
