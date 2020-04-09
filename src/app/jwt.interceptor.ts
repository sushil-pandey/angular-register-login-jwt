import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import{ServiceService} from './service.service'
import{ Router} from '@angular/router'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private apiService: ServiceService, private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let tokenreq= req.clone({
        headers: req.headers.set("Authorization", "bearer " + this.apiService.gettoken())
    })

    return next.handle(tokenreq)

//     if (req.headers.get('noauth'))
//         return next.handle(req.clone());
//     else {
//         const clonedreq = req.clone({
//             headers: req.headers.set("Authorization", "bearer " + this.apiService.gettoken()).append('Access-Control-Allow-Origin', '*')

//         });
//         return next.handle(clonedreq).pipe(
//             // tap(
//             //     event => { },
//             //     err => {
//             //         if (err.error.auth == false) {
//             //             this.router.navigateByUrl('/login');
//             //         }
//             //     })
//         );
//     }
// }
}
}
