import {User} from './user';
import {Consultation} from './consultation';
import {Rdv} from './rdv';

export class Service {
    id: number;
    libelle: string;
    utilisateurs: User[];
    consultations: Consultation[];
    rdvs: Rdv[];
}