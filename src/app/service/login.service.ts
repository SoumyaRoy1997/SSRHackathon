import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {staticSSR} from "../_helper/staticSSR.model"
import {login} from "../_helper/login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getLogin(){
      return this.httpClient.get<login[]>('assets/login-data.json');
  }
}
