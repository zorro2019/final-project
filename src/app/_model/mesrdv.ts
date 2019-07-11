import {User} from './user';
import {Rdv} from './rdv';

export class Mesrdv {
    id:number;
    title: string;
    date: Date;
    hour: number;
    min: number;
    start: Date;
    end: Date;
    user: User;
    rdv: Rdv;

}