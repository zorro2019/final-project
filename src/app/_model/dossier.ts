import {Antecedant} from './antecedant';
import {Patient} from './patient';

export class Dossier {
    id: number;
    creatAt: Date;
    numero: string;
    antecedents: Antecedant[];
    //patient_id: number;
    patient: Patient;

}