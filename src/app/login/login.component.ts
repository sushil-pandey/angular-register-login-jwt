import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{ServiceService}  from '../service.service'
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private apiService: ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      Password:new FormControl('', )
  })
  }

  get f() { return this.employeeForm.controls;}
  onSubmit(){

    var f = this.f;

    var data = {
      
     
      email:f.email.value,
    password:f.Password.value
     

  }
  this.apiService.Login(data).subscribe((response) => {
    console.log(response);
    this.apiService.setToken(response['token']);
    this.router.navigateByUrl('/profile');
},
(error) => {
  console.log(error);

});
}
}
