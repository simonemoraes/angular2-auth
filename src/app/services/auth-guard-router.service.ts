/* Criando um guardião de rotas */
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardRouterService implements CanActivate{

  constructor(
      private auth:AuthService,
      private router:Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if( this.auth.check ){
      return true;
    }

    this.router.navigate([ 'login' ]);
    return false;
  }

}
