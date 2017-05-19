import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {JwtTokenService} from "../services/jwt-token.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
};

  redirectAfterLogin = [ '/products/list' ];
  constructor(
      public http:Http,
      private jwtToken: JwtTokenService,
      private router:Router,
      private auth:AuthService
  ) {}

  ngOnInit() {
  }

  login(){

      this.http
          .post('http://localhost:8000/api/login', this.user)
          .toPromise()
          .then( response => {
              this.auth.check = true;
              this.jwtToken.token = response.json().token;
              this.router.navigate( this.redirectAfterLogin );
          });
  }

}

