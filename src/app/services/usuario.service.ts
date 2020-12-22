import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor(private http: HttpClient, private storage: Storage) { }

  login(email: string, password: string){
    const data = { email, password };

    return new Promise( resolve => {

      this.http.post(`${URL}/user/login`, data).subscribe( resp => {
        // console.log(resp);
        if ( resp['ok'] ){
          this.guradarToken(resp['token']);
          resolve(true);
        } else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
   });

  }

  async guradarToken( token: string ){
    this.token = token;
    await this.storage.set('token', token)
  }
}
