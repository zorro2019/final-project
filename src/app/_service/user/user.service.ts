import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../auth/authentication.service';
import {User} from '../../_model/user';
import {Role} from '../../_model/role';
import {Consultation} from '../../_model/consultation';
import {Rdv} from '../../_model/rdv';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private authService: AuthenticationService) {
    }

    public getUser() {
        return this.http.get<User[]>('http://localhost:8080/Utilisateur/utilisateurs');
    }

    public addUser(user: User) {
        //console.log(user-management.role.toString());
        return this.http.post<User>('http://localhost:8080/Utilisateur/add', user);
    }

    public getOne(id: number) {
        return this.http.get<User>('http://localhost:8080/Utilisateur/utilisateur/' + id);
    }

    public delete(id: number) {
        return this.http.delete<User>('http://localhost:8080/Utilisateur/delete/' + id);
    }

    public getRoles(id: number){
        return this.http.post<Role[]>('http://localhost:8080/User/userRoles/',+id);
    }
    public update(user: User){
        return this.http.post<User>("http://localhost:8080/Utilisateur/update", user);
    }
    public getByUsername(username: string){
        return this.http.post<User>("http://localhost:8080/Utilisateur/findOne", username);
    }
    public getConsultion(id: number){
        return this.http.get<Consultation[]>("http://localhost:8080/Utilisateur/getAllConsultation/"+id);
    }
    public getRdvs(id: number){
        return this.http.get<Rdv[]>("http://localhost:8080/Utilisateur/utilisateurRdv/"+id);
    }
}
