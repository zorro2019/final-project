import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rdv} from '../../_model/rdv';

@Injectable({
    providedIn: 'root'
})
export class RdvService {

    baseUrl = 'http://localhost:8080/RendezVous/';
    constructor(private http: HttpClient) {}

    public add(rdv: Rdv){
        return this.http.post<Rdv>(this.baseUrl+"add",rdv);
    }

    public getOne(id: number){
        console.log('id passé = '+ id);
        return this.http.get<Rdv>(this.baseUrl+"rdv/"+id);
    }

    public getAll(){
        return this.http.get<Rdv[]>(this.baseUrl+"rendezVous");
    }

    public update(rdv: Rdv){
        return this.http.post<Rdv>(this.baseUrl+"update", rdv);
    }
    public getAllUnaffected(){
        return this.http.get<Rdv[]>(this.baseUrl+"unaffectedRdv");
    }

    public utilisateurPatient(id: number){
        return this.http.post(this.baseUrl+"utilisateurPatient", id) ;
    }
}
