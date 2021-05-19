import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MainService} from '../main.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-unique-codes',
  templateUrl: './unique-codes.component.html',
  styleUrls: ['./unique-codes.component.css']
})
export class UniqueCodesComponent implements OnInit {
generatedcodes:any=[];
code_form:FormGroup;
  constructor(private mainservice:MainService, private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  this.code_form = this.formbuilder.group({
    pid:['',[Validators.required]],
    pbatch:['',[Validators.required]],
    expdate:['',[Validators.required]],
    mfgdate:['',[Validators.required]],
    codes:['',[Validators.required]]
  })  
  }

  generate_codes(){
    this.mainservice.generate_codes(this.code_form.value)
    .pipe()
    .subscribe(
      data=>{
        this.generatedcodes = data
      }
    )
  }

  returntomaster(){
    this.router.navigate(['/master'])
  }
}
