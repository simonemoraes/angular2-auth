/*  Criando serviço para autenticação */

import { Injectable } from '@angular/core';
import {JwtTokenService} from "./jwt-token.service";

@Injectable()
export class AuthService {

  public check:boolean = false;
  constructor(
      private jwtToken:JwtTokenService
  ) {
    this.check = this.jwtToken.token ? true : false;
  }

  logout(){
    this.jwtToken.token = null;
    this.check = false;
  }

}
