import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../_service/user/user.service';
import {first} from 'rxjs/operators';
import {MDBModalService, ModalBackdropComponent, ModalModule} from 'angular-bootstrap-md';
import {User} from '../../../../_model/user';
import {Role} from '../../../../_model/role';
import {RoleService} from '../../../../_service/role/role.service';

@Component({
    selector: 'app-delete-user',
    templateUrl: './delete-user.component.html',
    styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
    //modal : ModalBackdropComponent;
    user = new User();
    roles: Role[] = [];
    btn_alert : boolean = false;
    constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private roleSrc: RoleService) {
        //this.modal.open();
    }

    ngOnInit() {
        this.getUser();
        this.getRoles();
    }

    delete() {
        const id = this.route.snapshot.params['id'];
        this.userService.delete(id).subscribe(
            user => {
                console.log('supprimé avec succes !');
                //this.router.navigate(['/admin']);
                this.btn_alert = true;
            },
            error => {
                console.log('erreur de suppression');
            }
        );
        //this.router.navigate(['/admin/users']);
    }

    getUser() {
        const id = this.route.snapshot.params['id'];
        this.userService.getOne(id).pipe().subscribe(
            user => {
                this.user = user;
                console.log('user = ' + user);
            }
        );
    }

    getRoles() {
        const id = this.route.snapshot.params['id'];
        this.userService.getRoles(id).pipe().subscribe(
            roles => {
                this.roles = roles;
            }
        );
    }
    redirect(){
        this.router.navigate(['/admin/users']);
    }
}
