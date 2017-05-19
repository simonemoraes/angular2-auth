import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {JwtTokenService} from "../../services/jwt-token.service";
import 'rxjs/add/operator/toPromise';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Array<Object> = [];

  constructor(
      private http:Http,
      private jwtToken: JwtTokenService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    let requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', `Bearer ${ this.jwtToken.token }` );
    requestOptions.headers.set( 'Content-Type', 'application/json' );

    this.http
        .get( 'http://localhost:8000/api/products', requestOptions )
        .toPromise()
        .then( response => this.products = response.json() );
  }

}
