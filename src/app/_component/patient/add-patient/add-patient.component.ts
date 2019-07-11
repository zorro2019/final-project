import {Component, OnInit} from '@angular/core';
import {DossierService} from '../../../_service/dossier/dossier.service';
import {DatePipe} from '@angular/common';
import {PatientService} from '../../../_service/patient/patient.service';
import {Router} from '@angular/router';
import {AntecedentService} from '../../../_service/antecedent/antecedent.service';
import {FormBuilder, FormGroup, Validators, MinLengthValidator} from '@angular/forms';
import {Patient} from '../../../_model/patient';
import {Dossier} from '../../../_model/dossier';
import {Antecedant} from '../../../_model/antecedant';

declare var $: any;

@Component({
    selector: 'app-add-patient',
    templateUrl: './add-patient.component.html',
    styleUrls: ['./add-patient.component.css'],
    providers: [DatePipe]
})
export class AddPatientComponent implements OnInit {

    private hideLevel1 = false;
    private hideLevel2 = true;
    private hideLevel3 = true;
    private formLevel1: FormGroup;
    private formLevel2: FormGroup;
    private isSubmitLevel1 = false;
    private laodingLevel1 = false;
    private laodingLevel2 = false;
    private isSubmitLevel2 = false;
    private antecedants: Antecedant[] = [];
    private newAntecedants: Antecedant[] = [];
    private selectedOptions: any;
    private patient = new Patient();
    private btnAlert = false;
    private formNewAnt: FormGroup;
    private isSubmitNewAnt = false;
    private newAddedAntecedants: Antecedant[]  = [];
    private btnNewAdded = false;

    constructor(private builder: FormBuilder, private patientService: PatientService, private antecedantService: AntecedentService, private router: Router) {

    }

    ngOnInit(): void {
        this.formLevel1 = this.builder.group({
                nom: [null, Validators.required],
                prenom: [null, Validators.required,],
                dateNaissance: [null, Validators.required],
                lieuNaissance: [null],
                adresse: [null],
                telephone: [null]
            }
        );

        this.formLevel2 = this.builder.group({
                sexe: [null, Validators.required],
                email: [null, Validators.required,],
                profession: [null,],
                situationMatrimoniale: [null],
                groupeSanguin: [null],
                poids: [null, Validators.required]
            });

        this.antecedants = [
            {
                id: 1,
                description: "Paludisme",
                type: "Antécédents medicaux et facteur de risque",
            },
            {
                id: 2,
                description: "Appendicectomie",
                type: "Antécédents chirurgicaux et obstétricaux",
            },
            {
                id: 3,
                description: "Diabete",
                type: "Antécédants familliaux",
            },
            {
                id: 4,
                description: "Hyper tension",
                type: "Antécédents medicaux et facteur de risque",
            },
            {
                id: 5,
                description:"Allergie",
                type: "Allergie et intolerance"
            },
            {
                id: 6,
                description: 'Maladie cardiaque',
                type: "Antécédants medicaux et facteur de risque"
            }

        ];

        this.formNewAnt = this.builder.group({
           type:[null, Validators.required],
           description: [null, Validators.required],
           date:[null]
        });
    }

    submitLevel1() {
        this.isSubmitLevel1 = true;
        if (this.formLevel1.invalid) {
            return;
        }
        this.laodingLevel1 = true;
        setTimeout(() => {
            this.laodingLevel1 = false;
            this.hideLevel1 = true;
            this.hideLevel2 = false;
        }, 1000);

        console.log('Nom = ' + this.fLevel1.prenom.value);
    }

    submitLevel2() {
        this.isSubmitLevel2 = true;
        if (this.formLevel2.invalid){
            return ;
        }
        this.laodingLevel2 = true;
        setTimeout(()=>{
            this.laodingLevel2 = false;
            this.hideLevel2 = true;
            this.hideLevel3 = false;
        },1000);

    }

    selectedValue() {
        this.newAntecedants = this.selectedOptions;
    }

    addAntecedant() {
        if (this.newAntecedants != null){
            console.log('save .....');
            this.patient.nom = this.fLevel1.nom.value;
            this.patient.prenom = this.fLevel1.prenom.value;
            this.patient.dateNaissance = this.fLevel1.dateNaissance.value;
            this.patient.lieuNaissance = this.fLevel1.lieuNaissance.value;
            this.patient.adresse = this.fLevel1.adresse.value;
            this.patient.telephone = this.fLevel1.telephone.value;
            this.patient.sexe = this.fLevel2.sexe.value;
            this.patient.email = this.fLevel2.email.value;
            this.patient.situationMatrimoniale = this.fLevel2.situationMatrimoniale.value;
            this.patient.groupeSanguin = this.fLevel2.groupeSanguin.value;
            this.patient.poids = this.fLevel2.poids.value;
            this.patient.profession = this.fLevel2.profession.value;
            this.patient.antecedants = this.newAntecedants;
            for(let ant of this.newAntecedants){
                this.antecedantService.add(ant).pipe().subscribe(
                    ant => {
                        console.log('antecedant saved !!!');
                        this.btnAlert = true;
                        this.hideLevel3 = true;
                    },
                    error =>{
                        console.log('erreur');
                    }
                );
            }
            if (this.newAddedAntecedants != null){
                for (let ant of this.newAddedAntecedants){
                    this.newAntecedants.push(ant);
                }
            }
            this.patient.antecedants = this.newAntecedants;
            this.patientService.add(this.patient).pipe().subscribe(
                patient => {
                    console.log('added success !');
                    setTimeout(() => {
                        this.hideLevel1 = false;
                        this.btnAlert = false;
                        this.router.navigate(['/patient/add-rdv']);
                    }, 3000);
                },
                error => {
                    console.log('erreur adding');
                }
            );
        }
    }

    public get fLevel1() {
        return this.formLevel1.controls;
    }
    public get fLevel2() {
        return this.formLevel2.controls;
    }
    public get fNewAnt(){return this.formNewAnt.controls;}

    previewsLevel1() {
        this.hideLevel2 = true;
        this.hideLevel1 = false;
    }

    previewsLevel2() {
        this.hideLevel2 = false;
        this.hideLevel3 = true;
    }

    submitNewAnt() {
        this.isSubmitNewAnt = true;
        if (this.formNewAnt.invalid){
            return ;
        }
        let ant = new Antecedant();
        ant.description = this.fNewAnt.type.value;
        ant.type = this.fNewAnt.description.value;
        ant.id = null;
        this.antecedantService.add(ant).pipe().subscribe(
            a =>{
                console.log('new antecedant added !');
                this.newAddedAntecedants.push(a);
                console.log('taille = '+ this.newAntecedants.length);
                this.btnNewAdded = true;
            },
            e=>{
                console.log('erreur antecedant adding')
            }
        );
    }

    btnNewClicked() {
        this.btnNewAdded = false;
    }
}
