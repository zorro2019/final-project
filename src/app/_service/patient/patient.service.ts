import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../../_model/patient';
import {Consultation} from '../../_model/consultation';
import {Dossier} from '../../_model/dossier';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
    baseUrl = "http://localhost:8080/Patient/";
  constructor(private http: HttpClient) { }

  public add(patient: Patient){
      console.log('Nom ='+ patient.adresse);
      return this.http.post<Patient>(this.baseUrl+"add", patient);
  }

  public getAll(){
      return this.http.get<Patient[]>(this.baseUrl+"patients");
  }

  public getOne(id : string){
      return this.http.get<Patient>(this.baseUrl+"patient/"+id);
  }

  public delete(id : number){
      return this.http.delete<any>(this.baseUrl+"delete/"+id);
  }
  public update(patient: Patient){
      return this.http.post<Patient>(this.baseUrl+"update", patient);
  }

  public allConsultation(idPatient: number){
      return this.http.post<Consultation[]>(this.baseUrl+"allConsultation",idPatient);
  }

  public getDossier(idPatient: number){
      return this.http.post<Dossier>(this.baseUrl+"patientDossier", idPatient);
  }

  public getByNumero(numero: string){
      return this.http.post<Patient>(this.baseUrl+"getByNumeroDossier",numero);
  }

  public getDifferentPatientByUser(id: number){
      return this.http.get<Patient[]>("http://localhost:8080/Consultation/allDifferentConsultation/"+id);
  }

  public getPatientByNumero(numero: string){
    return this.http.post<Patient>(this.baseUrl+"getByNumero",numero);
}
}
