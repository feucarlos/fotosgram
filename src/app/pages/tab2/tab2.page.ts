import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImages: string[] = [];

  cargandoGeo = false;

  post = {
    mensaje: '',
    coords: null,
    posicion: false
  };

  constructor(private postsService: PostsService,
              private navCtrl: NavController,
              private geolocation: Geolocation,
              private camera: Camera) { }

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

  getGeo(){
    console.log(this.post);

    if (!this.post.posicion ){
      this.post.coords = null;
      return;
    }

    this.cargandoGeo = true;

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.cargandoGeo = false;
      const coords = `${ resp.coords.latitude}, ${ resp.coords.longitude }`
      console.log(coords);
      this.post.coords = coords;
      
    }).catch((error) => {
      this.cargandoGeo = false;
      console.log('Error getting location', error);
     });
    
  }

  camara(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     const img = window.Ionic.WebView.convertFileSrc( imageData );
     console.log(img);

     this.tempImages.push( img );
     
    }, (err) => {
     // Handle error
    });
    
  }

}
