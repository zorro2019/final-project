import {Component, OnInit} from '@angular/core';
import {RdvService} from '../../../_service/rdv/rdv.service';
import {Rdv} from '../../../_model/rdv';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../../_service/service/service.service';
import {PatientService} from '../../../_service/patient/patient.service';
import {Service} from '../../../_model/service';
import {Patient} from '../../../_model/patient';
import {DossierService} from '../../../_service/dossier/dossier.service';
import {DatePipe} from '@angular/common';
import {Antecedant} from '../../../_model/antecedant';
import {Router} from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-add-rdv',
    templateUrl: './add-rdv.component.html',
    styleUrls: ['./add-rdv.component.css'],
    providers: [DatePipe]
})
export class AddRdvComponent implements OnInit {

    private formFindPatient: FormGroup;

    private formAddRdv: FormGroup;

    private services: Service[] = [];

    private btnAlert = false;

    private isSubmitFind = false;

    private isSubmitAdd = false;

    private loading = false;

    private patient = new Patient();

    private findedPatient = false;

    private noFindedPatient = false;


    constructor(private rdvService: RdvService, private formBuilder: FormBuilder, private serviceSrc: ServiceService,
                private patientSrc: PatientService, private dossierSrc: DossierService, private router: Router) {
    }

    ngOnInit() {
        this.formFindPatient = this.formBuilder.group({
            numeroPatient: [null, Validators.required]
        });

        this.formAddRdv = this.formBuilder.group({
            date: [null, Validators.required],
            service: [null, Validators.required],
        });

        this.serviceSrc.getAll().pipe().subscribe(
            src => {
                this.services = src;
            }
        );
        this.patient.nom = "";
        this.patient.prenom = "";
        this.patient.adresse = "";
        this.patient.dateNaissance = null;

    }

    public get formFind() {
        return this.formFindPatient.controls;
    }

    public get formAdd() {
        return this.formAddRdv.controls;
    }

    submitFind() {
        this.isSubmitFind = true;
        if (this.formFindPatient.invalid){
            return ;
        }
        this.loading = true;
        this.patientSrc.getPatientByNumero(this.formFind.numeroPatient.value).pipe().subscribe(
            patient =>{
                if (patient != null){
                    this.patient = patient;
                    console.log('patient = '+ patient);
                    this.findedPatient = true;
                }
                else {
                    this.noFindedPatient = true;
                }
                console.log('getting .......');
            },
            error =>{
                this.noFindedPatient = true;
            }
        );
        this.loading = false;
        this.formFindPatient.reset();
        this.isSubmitFind = false;
    }
}