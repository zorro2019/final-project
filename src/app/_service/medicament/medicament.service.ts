import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Medicament} from '../../_model/medicament';
import {DetailConsultation} from '../../_model/detailConsultation';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  baseUrl = "http://localhost:8080/Medicament/";
  constructor(private http: HttpClient) { }

  public add(medoc: Medicament){
      return this.http.post<Medicament>(this.baseUrl+"addMedicament", medoc);
  }

  public getAll(){
      return this.http.get<Medicament[]>(this.baseUrl+"medicaments");
  }

  public getOne(id: number){
      return this.http.get(this.baseUrl+"medicament/"+id);
  }

  public delete(id : number){
      return this.http.delete(this.baseUrl+"medicament-delete/"+id);
  }

  public update(medoc : Medicament){
      return this.http.post(this.baseUrl+"medicament-update", medoc);
  }

  public allDetailConsultation(id : number){
      return this.http.post<DetailConsultation[]>(this.baseUrl+"allDetailConsultation", id);
  }
}
