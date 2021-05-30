import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';
import { Credit } from '../models/credit';
import { CreditByClient } from '../models/credit-by-client';
import { ResponseApi } from '../models/response-api';
const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});


@Injectable({
  providedIn: 'root'
})
export class CreditService {



  constructor(private _http: HttpClient) { }


  getTypeDocument(){
    return this._http.get<ResponseApi>(`${environment.urlAPI}credit/getTypeDocument`)
  }



  createCredits(objClient: Client, objCredit: Credit) {
    debugger;
    var model = new CreditByClient();
    model.EntityClient = objClient;
    model.EntityCredit = objCredit;
    return this._http.post<ResponseApi>(`${environment.urlAPI}credit/createCredits` , model, {headers: headers});      
  }



}
