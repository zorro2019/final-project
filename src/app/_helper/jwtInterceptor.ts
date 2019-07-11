import {Injectable} from '@angular/core';
import {AuthenticationService} from '../_service/auth/authentication.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    jwtHelper = new JwtHelper();
    role;
    constructor(private authService: AuthenticationService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem("currentUser")){
            let currentUser = this.authService.currentUserValue;
            if (currentUser && currentUser.token){
                request = request.clone({
                    setHeaders: {
                        Authorization: 'Bearer '+currentUser.token
                    }
                });
            }
        }
        return next.handle(request);
    }
    public getRole(){
        return this.role;
    }
}