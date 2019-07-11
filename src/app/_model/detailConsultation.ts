import {Consultation} from './consultation';
import {Medicament} from './medicament';

export class DetailConsultation {
    id: number;
    dosage: string;
    consultation: Consultation;
    medicaments: Medicament[];
}