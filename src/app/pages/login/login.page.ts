import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { logging } from 'protractor';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {

  @ViewChild('loginSlide') slide: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  }

  loginUser = {
    email: 'feucarlos@gmail.com',
    password: 'secreto'
  }

  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController) {
    
  }

  ngOnInit() {}

  ngAfterViewInit(){
    // this.slide.lockSwipes(true);
  }

  async login(flogin: NgForm) {

    if (flogin.invalid){ return; }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if ( valido ){
      // navegar a tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
    } else {
      // mostrar alerta de usuario o contraseña incorrectos

      console.log('error fatal');
      
    }


    
  }

  registro(fregistro: NgForm) {
    console.log(fregistro.valid);
  }

  seleccionarAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
  }

  cambiaSlide(opt) {
    this.slide.lockSwipes(false);
    (opt === 'login') ? this.slide.slidePrev(): this.slide.slideNext();
    this.slide.lockSwipes(true);
  }

}
