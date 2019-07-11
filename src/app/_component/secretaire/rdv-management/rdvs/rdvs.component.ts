import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../../../_service/service/service.service';
import {Service} from '../../../../_model/service';
import {User} from '../../../../_model/user';
import {Rdv} from '../../../../_model/rdv';
import {UserService} from '../../../../_service/user/user.service';
import {CalendarDateFormatter, CalendarView, DAYS_OF_WEEK, CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import {CustomDateFormatter} from '../../../../calender-management/utils/custom-date-formatter.provider';
import {colors} from '../../../../calender-management/color';
import {Subject} from 'rxjs';
import {RdvService} from '../../../../_service/rdv/rdv.service';
import {Patient} from '../../../../_model/patient';
import {addMinutes} from 'date-fns';

declare var $: any;

@Component({
    selector: 'app-rdvs',
    templateUrl: './rdvs.component.html',
    styles: [
            `.drag-active {
            position: relative;
            z-index: 1;
            pointer-events: none;
        }

        .drag-over {
            background-color: #eee;
        }`
    ],
    providers: [
        {
            provide: CalendarDateFormatter,
            useClass: CustomDateFormatter
        }
    ]
})
export class RdvsComponent implements OnInit {

    private services: Service[] = [];
    private medecins: User[] = [];
    private hideListService = true;
    private hideListMedecin = true;
    private hideEmploi = true;
    private service = new Service();
    private medecin = new User();
    private hideRdv = true;
    private rendezVous: Rdv[] = [];
    private loading = false;
    // Calendar variables

    view: string = 'month';

    viewDate: Date = new Date();

    CalendarView = CalendarView;

    locale: string = 'fr';

    weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

    weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];

    externalEvents: CalendarEvent[] = [];

    events: CalendarEvent[] = [];

    activeDayIsOpen = false;

    refresh = new Subject<void>();

    private rdvGetting = new Rdv();

    private rdvPatient = new Patient();

    private serviceRdv = new Service();

    private test_lenght = false;

    setView(view: CalendarView) {
        this.view = view;
    }

    constructor(private serviceSrc: ServiceService, private userService: UserService, private rdvService: RdvService) {

    }

    ngOnInit(): void {
        this.getAllRdv();
        this.refresh.next();
        this.serviceSrc.getAll().pipe().subscribe(
            src => {
                this.services = src;
            }
        );

        console.log('test date = ' + new Date(addMinutes('2019-08-03 10:0', 15)));


    }

    hideServices() {
        if (this.hideListService === true) {
            this.hideListService = false;
            this.hideListMedecin = true;
            this.hideEmploi = true;
            return;
        }
        if (this.hideListService == false) {
            this.hideListService = true;
            return;
        }
    }

    showService(id: number) {
        this.serviceSrc.getUtilisateurs(id).pipe().subscribe(
            users => {
                this.medecins = users;
                console.log('getting medecin .....');
                this.hideListMedecin = false;
                this.hideListService = true;
                this.serviceSrc.getOne(id).pipe().subscribe(
                    src => {
                        this.service = src;
                    }
                );
            }
        );
    }

    showMedecinEmploi(id: number) {
        for (let med of this.medecins) {
            if (med.id == id) {
                this.medecin = med;
            }
        }
        this.events = [];
        this.hideListService = true;
        this.hideListMedecin = true;
        this.hideEmploi = false;
        this.userService.getRdvs(id).pipe().subscribe(
            rdv => {
                this.rendezVous = rdv;
                console.log('la liste de rdv reccuperé = ' + this.rendezVous.length);
                for (let rd of rdv) {
                    console.log('rdv_date_fin == ' + new Date(addMinutes(rd.date + ' ' + rd.heure + ':' + rd.minute, 15)) + ' de rdv' + rd.id);
                    let min: any = rd.minute;
                    if (rd.minute == 0) {
                        min = '00';
                        console.log('min = ' + rd.minute);
                    }
                    if (rd.rdvEffectue == false) {
                        this.events.push({
                            id: rd.id,
                            title: 'rdv ' + rd.id,
                            color: colors.red,
                            start: new Date(rd.date + ' ' + rd.heure + ':' + rd.minute),

                        });
                        console.log('rdv non effectué');
                    }
                    else {
                        this.events.push({
                            id: rd.id,
                            title: 'rdv ' + rd.id,
                            color: colors.blue,
                            start: new Date(rd.date + ' ' + rd.heure + ':' + rd.minute),

                        });
                        console.log('rdv effectué');
                    }
                }
                console.log('events === ' + this.events.length);
                this.refresh.next();
            }
        );
    }

    showRdv() {
        if (this.hideRdv === true) {
            this.hideRdv = false;
            return;
        }
        if (this.hideRdv === false) {
            this.hideRdv = true;
            return;
        }
    }

    // Calendar Method

    eventDropped({
                     event,
                     newStart,
                     newEnd,
                     allDay
                 }: CalendarEventTimesChangedEvent): void {
        const externalIndex = this.externalEvents.indexOf(event);
        let test: boolean = false;
        if (typeof allDay !== 'undefined') {
            event.allDay = allDay;
        }
        event.start = newStart;
        console.log('event : ' + event.start);
        if (externalIndex > -1) {
            if (13 <= event.start.getHours() && event.start.getHours() <= 15) {
                console.log('heure de pause !!!!');
                alert('Ajout Impossible pause de 13h à 15h !');
                test = true;
            }
            else {
                this.externalEvents.splice(externalIndex, 1);
                this.events.push(event);
                this.rdvGetting.utilisateur = this.medecin;
                //this.rdvGetting.date = new Date(event.start.getFullYear() + '-' + event.start.getMonth() + '-' + event.start.getDay());
                //console.log('date rdv ==='+this.rdvGetting.date);
                this.rdvGetting.date = event.start;
                this.rdvGetting.heure = event.start.getHours();
                this.rdvGetting.minute = event.start.getMinutes();
                this.rdvService.update(this.rdvGetting).pipe().subscribe(
                    rdv => {
                        console.log('updated !!!');
                        console.log('id ==== ' + this.rdvGetting.id);
                    }
                );
            }

        }
        if (test == false) {
            event.end = new Date(addMinutes(event.start, 15));

            event.title = '' + event.start.getHours() + ':' + event.start.getMinutes() + '-' + event.end.getHours() + ':' + event.end.getMinutes();
        }

        if (newEnd) {
            event.end = newEnd;
        }
        if (this.view === 'month') {
            this.viewDate = newStart;
            this.activeDayIsOpen = true;
        }
        this.events = [...this.events];
    }

    externalDrop(event: CalendarEvent) {
        if (this.externalEvents.indexOf(event) === -1) {
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.externalEvents.push(event);
        }
    }

    showRdvDetail(id: number) {
        console.log('id reccupere = ' + id);
        this.rdvService.getOne(id).pipe().subscribe(
            rdv => {
                this.rdvGetting = rdv;
                this.rdvPatient = rdv.patient;
                this.serviceRdv = rdv.service;
                console.log('taille event = ' + this.events.length);
            }
        )
    }

    getAllRdv() {
        this.loading = true;
        this.rdvService.getAllUnaffected().subscribe(
            rdvs => {
                for (let rdv of rdvs) {
                    console.log('patient = ' + rdv.patient.nom + ' ' + rdv.patient.prenom);
                    if (rdv.utilisateur === null) {
                        this.externalEvents.push({
                            id: rdv.id,
                            title: 'rdv ' + rdv.id,
                            color: colors.yellow,
                            start: rdv.date,
                            draggable: true
                        });
                        this.refresh.next();
                    }
                }
                this.loading = false;
                this.refresh.next();
            }
        );
    }

    eventClicked({event}: { event: CalendarEvent }): void {
        console.log('Event clicked', event.id);
        $('#myModal').modal('show');
    }
}