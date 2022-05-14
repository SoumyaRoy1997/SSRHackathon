import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {staticSSR} from "../_helper/staticSSR.model"

@Injectable({
  providedIn: 'root'
})
export class SsrService {

  constructor(private httpClient: HttpClient) { }


  getSsr(){
    return this.httpClient.get('assets/mock-data.json');
  }
}
