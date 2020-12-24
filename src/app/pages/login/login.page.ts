import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { logging } from 'protractor';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {

  @ViewChild('loginSlide') slide: IonSlides;

  loginUser = {
    email: 'feucarlos@gmail.com',
    password: ''
  }

  registerUser: Usuario = {
    email: 'test',
    password: '',
    nombre: 'Tests',
    avatar: 'av-1.png'
  }

  constructor(private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UiServiceService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.slide.lockSwipes(true);
  }

  async login(flogin: NgForm) {

    if (flogin.invalid) { return; }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if (valido) {
      // navegar a tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
    } else {
      // mostrar alerta de usuario o contraseña incorrectos
      this.uiService.alertaInforrmativa('Error en usuario/contraseña');
    }
  }

  async registro(fregistro: NgForm) {

    if (fregistro.invalid) { return; }

    const valido = await this.usuarioService.registro(this.registerUser);

    if ( valido ){
      // navegar a tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
    } else {
      // mostrar alerta de usuario o contraseña incorrectos
      this.uiService.alertaInforrmativa('El email ha sido registrado previamente');
    }

  }

  cambiaARegistro() {
    this.slide.lockSwipes(false);
    this.slide.slideTo(1);
    this.slide.lockSwipes(true);
  }

  cambiaALogin() {
    this.slide.lockSwipes(false);
    this.slide.slideTo(0);
    this.slide.lockSwipes(true);
  }

}
