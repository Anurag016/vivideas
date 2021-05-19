import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MainService} from '../main.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;

  constructor(private formBuilder:FormBuilder,private mainservice:MainService) { }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      fullname:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      usertype:['',[Validators.required]]
    });
  }

  onLoggedin() {
    if(this.registerform.invalid){
      window.alert("Invalid Details");
      return;
    }
    console.log(">>"+this.registerform.value.fullname);
    
    this.mainservice.register(this.registerform.value)
    .subscribe(
      data =>{
        if(data.success=="email already registered"){
          window.alert("Email Already Registered!");
        }
        else{
          window.alert("Successfully Registered.")
        }
       // console.log("reg data",data);
        this.registerform.reset();

      }
    )
  }

}
