import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MainService} from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private mainservice:MainService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  login(){
    this.mainservice.login(this.loginForm.value)
    .pipe()
    .subscribe(
      data =>{
        if(data.success==false){
          window.alert("invalid user");
        }
        else{
          localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('token', JSON.stringify(data.data));
          this.router.navigate(['/master']);
        }
      }
    )
  }

}
