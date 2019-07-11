import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dossier} from '../../_model/dossier';
import {Antecedant} from '../../_model/antecedant';

@Injectable({
    providedIn: 'root'
})
export class DossierService {

    baseUrl = 'http://localhost:8080/Dossier/';

    constructor(private http: HttpClient) {
    }

    public add(dossier: Dossier) {
        return this.http.post<Dossier>(this.baseUrl + 'addDossier', dossier);
    }

    public getAll() {
        return this.http.get<Dossier[]>(this.baseUrl + 'dossiers');
    }

    public getOne(id: number) {
        return this.http.get<Dossier>(this.baseUrl + 'dossier/' + id);
    }

    public delete(id: number) {
        return this.http.delete<any>(this.baseUrl + 'delete-dossier/' + id);
    }

    public update(dossier: Dossier) {
        return this.http.post(this.baseUrl + 'update-dossier', dossier);
    }

    public allAntecedent(id: number) {
        return this.http.post<Antecedant[]>(this.baseUrl + 'listAntecedent', id);
    }

    public getByNumero(numero: string) {
        return this.http.post<Dossier>(this.baseUrl + 'getByNumero', numero);
    }
}
