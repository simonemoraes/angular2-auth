import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {LocalStorageService} from "../services/local-storage.service";


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

  constructor(public http:Http, private localStorage: LocalStorageService) {
    this.localStorage.set('nome', 'Simone')
        .set('curso', 'angular2');

    console.log(this.localStorage.get('nome'));
    console.log(this.localStorage.get('curso'));
    console.log(this.localStorage.get('nada'));

    this.localStorage.setObject('object', {
      'nome' : 'Simone Moraes'
    });

    console.log(this.localStorage.getObject('object'));
    console.log(window.localStorage['object1']);
    console.log(this.localStorage.getObject('object1'));
    //this.localStorage.remove('nome').remove('curso').remove('object');

  }

  ngOnInit() {
  }

  login(){

      this.http
          .post('http://localhost:8000/api/login', this.user)
          .toPromise()
          .then(response => console.log(response));
  }

}
