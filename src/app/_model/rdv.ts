import {Patient} from './patient';
import {Service} from './service';
import {User} from './user';

export class Rdv {
    id: number;
    date: Date;
    heure: number;
    minute: number;
    rdvEffectue: boolean;
    patient: Patient;
    service: Service;
    utilisateur: User;

}