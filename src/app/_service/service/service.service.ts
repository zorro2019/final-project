import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../../_model/service';
import {Consultation} from '../../_model/consultation';
import {User} from '../../_model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public getAll(){
      return this.http.get<Service[]>("http://localhost:8080/Service/services");
  }

  public add(service: Service){
      return this.http.post<Service>("http://localhost:8080/Service/add", service);
  }

  public getOne(id: number){
      return this.http.get<Service>("http://localhost:8080/Service/service/"+id);
  }

  public delete(id: number){
      return this.http.delete<any>("http://localhost:8080/Service/delete/"+id);
  }

  public update(service: Service){
      return this.http.post<Service>("http://localhost:8080/Service/update",service);
  }
  public getAllConsultation(idService : number){
      return this.http.post<Consultation[]>("http://localhost:8080/Service/allConsultation",idService);
  }

  public getUtilisateurs(id: number){
      return this.http.post<User[]>("http://localhost:8080/Service/getUsers",id);
  }

}