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
  sampleURL="https://ibac0vo2vf-vpce-091b00ee6ad77a151.execute-api.us-east-1.amazonaws.com/dev/getssrsuggestion?smId=2037541869"
  
  constructor(private httpClient: HttpClient) { }


  getPassengerHistory(ssm: string){
    return this.httpClient.get<passenger[]>('assets/passenger-history-data.json');
  }
  getRecomendedSsr(ssm: string){
    const requestArray=JSON.stringify({"skymiles":[ssm]})
    const headers = {'Content-Type': 'application/json'};
    let respone
    return this.httpClient.get(this.sampleURL);
    // return this.httpClient.post(this.getURL
    // ,requestArray,{headers})
  }

  postData(request:any){
    const requestArray=request
    const headers = {'Content-Type': 'application/json'};
    let respone
    return this.httpClient.post(this.postURL
    ,requestArray,{headers}).subscribe(data=>{
      console.log(data)
    })
  }
}
