import {Role} from './role';
import {Consultation} from './consultation';
import {Service} from './service';

export class User {
    id: number;
    changed: boolean;
    enabled: boolean;
    matricule: string;
    nom: string;
    password: string;
    photo: string;
    prenom: string;
    username: string;
    tel: string;
    email: string;
    roles: Role[];
    token?: string;
    consultation: Consultation[];
    services: Service[];
}
