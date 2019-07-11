import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from '../../_model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  public getRoles(){
    return this.http.get<Role[]>("http://localhost:8080/Role/roles");
  }
}
