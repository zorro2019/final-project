import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Consultation} from '../../_model/consultation';
import {Service} from '../../_model/service';
import {Patient} from '../../_model/patient';
import {DetailConsultation} from '../../_model/detailConsultation';
import {User} from '../../_model/user';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

    baseUrl = "http://localhost:8080/Consultation/";
  constructor(private http: HttpClient) { }

  public add(consultation: Consultation){
      return this.http.post<Consultation>(this.baseUrl+"addConsultation", consultation);
  }

  public getAll(){
      return this.http.get<Consultation[]>(this.baseUrl+"consultations");
  }

  public getOne(id : number){
      return this.http.get<Consultation>(this.baseUrl+"consultation/"+id);
  }

  public delete(id: number){
      return this.http.delete<any>(this.baseUrl+"delete-consultation/"+id);
  }

  public update(consultation: Consultation){
      return this.http.post<Consultation>(this.baseUrl+"update-consultation", consultation);
  }

  public getService(id: number){
      return this.http.post<Service>(this.baseUrl+"getService",id);
  }

  public getPatient(id: number){
      return this.http.post<Patient>(this.baseUrl+"getPatient", id);
  }

  public getUtilisateur(id: number){
      return this.http.post<User>(this.baseUrl+"getUtilisateur", id);
  }

  public getListDetailConsultation(id: number){
      return this.http.post<DetailConsultation[]>(this.baseUrl+"getListDetailConsultation", id);
  }

}
