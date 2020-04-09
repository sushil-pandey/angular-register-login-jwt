import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{ServiceService}  from '../service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private apiService: ServiceService) { }

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
      name : f.name.value,
     
      email:f.email.value,
    password:f.Password.value
     
    };

    this.apiService.Register(data).subscribe((response) => {
      console.log('Registered successfully created!')
  },
  (error) => {
    console.log(error);
  
  });
}
}
