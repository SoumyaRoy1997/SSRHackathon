import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {staticSSR} from "../_helper/staticSSR.model"
import { passenger } from '../_helper/passenger.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  getURL="https://g8kxdeq7a3-vpce-091b00ee6ad77a151.execute-api.us-east-1.amazonaws.com/dev/flyhigh-demo-apis/getsuggestions";
  postURL="https://g8kxdeq7a3-vpce-091b00ee6ad77a151.execute-api.us-east-1.amazonaws.com/dev/flyhigh-demo-apis/addhistory"
  sampleURL="https://atm9u4va07.execute-api.us-east-1.amazonaws.com/dev/getssrfromsm?smId=8000000001"
  constructor(private httpClient: HttpClient) { }


  getPassengerHistory(ssm: string){
    return this.httpClient.get<passenger[]>('assets/passenger-history-data.json');
  }
  async getRecomendedSsr(ssm: string){
    ssm='5482910151';
    
    const requestArray=JSON.stringify({"skymiles":["5482910151"]})
    const headers = {'Content-Type': 'application/json'};
    let respone
    // return this.httpClient.get(this.sampleURL);
    await this.httpClient.post(this.getURL
    ,requestArray,{headers}).toPromise().then(value=>{
      console.log(value)
      respone=value
    })
    return respone
    // return this.httpClient.get<staticSSR[]>('assets/ssr-response-data.json');
  }
}
