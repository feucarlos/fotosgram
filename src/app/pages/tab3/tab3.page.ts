import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { PostsService } from 'src/app/services/posts.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  private usuario: Usuario = {};

  constructor(private usuarioService: UsuarioService,
              private uiService: UiServiceService,
              private postsService: PostsService ) {}

  ngOnInit(){
    this.usuario = this.usuarioService.getUsuario();
  }

  async actualizar(fActualizar: NgForm){
    if (fActualizar.invalid) { return; }

    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );

    console.log(actualizado);
    
    if (actualizado) {
      // toast mensaje de actualizado
      this.uiService.presentToast('Registro actualizado')
    } else {
      // mensaje de error
      this.uiService.presentToast('No se pudo actualizar')
    }

  }

  logout(){
    this.postsService.paginaPosts = 0;
    this.usuarioService.logout();
  }

}
