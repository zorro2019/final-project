import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Antecedant} from '../../_model/antecedant';

@Injectable({
    providedIn: 'root'
})
export class AntecedentService {

    baseUrl = 'http://localhost:8080/Antecedant/';

    constructor(private http: HttpClient) {
    }

    public add(ant: Antecedant) {
        return this.http.post<Antecedant>(this.baseUrl + 'add', ant);
    }

    public getAll() {
        return this.http.get<Antecedant[]>(this.baseUrl + 'antecedents');
    }

    public getOne(id: number) {
        return this.http.get<Antecedant>(this.baseUrl + 'antecedent/' + id);
    }

    public delete(id: number) {
        return this.http.delete<any>(this.baseUrl + 'delete/' + id);
    }

    public update(ant: Antecedant) {
        return this.http.post<Antecedant>(this.baseUrl + 'update', ant);
    }

    public addAll(ant: Antecedant[]) {
        return this.http.post<any>(this.baseUrl + 'addAllAntecedent', ant)
    }
}
