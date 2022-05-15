import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {staticSSR} from "../_helper/staticSSR.model"
import { passenger } from '../_helper/passenger.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }


  getPassengerHistory(ssm: string){
    return this.httpClient.get<passenger[]>('assets/passenger-history-data.json');
  }
  getRecomendedSsr(ssm: string){
    return this.httpClient.get<staticSSR[]>('assets/ssr-response-data.json');
  }
}
