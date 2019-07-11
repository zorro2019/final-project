import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Medicament} from '../../_model/medicament';
import {Mesrdv} from '../../_model/mesrdv';

@Injectable({
  providedIn: 'root'
})
export class MesRdvService {
    baseUrl = "http://localhost:8080/MesRdv/";
    constructor(private http: HttpClient) { }

    public add(rdv: Mesrdv){
        return this.http.post<Mesrdv>(this.baseUrl+"addRdv", rdv);
    }

    public getAll(){
      return this.http.get<Mesrdv[]>(this.baseUrl+'all');
    }
}
