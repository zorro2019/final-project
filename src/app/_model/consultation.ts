import {Patient} from './patient';
import {Service} from './service';
import {User} from './user';
import {DetailConsultation} from './detailConsultation';

export class Consultation {
    id: number;
    date: Date;
    patient: Patient;
    service: Service;
    utilisateur: User;
    detailConsultations: DetailConsultation[];

}