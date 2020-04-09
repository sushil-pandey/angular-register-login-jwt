import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../service.service'
import{ Router} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private apiService: ServiceService, private router:Router) {}
userdetails
  ngOnInit(): void {

    this.apiService.getuser().subscribe(
      res =>{
       
this.userdetails= res['user'];
console.log(this.userdetails);
      }
    )
  }

  onlogout(){
    this.apiService.deleteToken();
    this.router.navigate(['/login']);
  }

}
