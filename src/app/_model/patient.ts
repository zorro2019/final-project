import {Consultation} from './consultation';
import {Antecedant} from './antecedant';

export class Patient {
    id: number;

    nom: string;
    prenom: string;
    dateNaissance: Date;
    lieuNaissance: string;
    adresse: string;
    telephone: string;

    sexe: string;
    email: string;
    profession: string;
    situationMatrimoniale: string;
    groupeSanguin: string;
    poids: number;
    consultations: Consultation[];
    antecedants: Antecedant[];
    numeroPatient: string;

}
