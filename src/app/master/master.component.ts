import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MainService} from '../main.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
productform:FormGroup;
file:any;
  constructor(private mainservice:MainService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.productform = this.formbuilder.group({
      pid:['',[Validators.required]],
      pname:['',[Validators.required]],
      pimage:['',[Validators.required]]
    })
  }

  imageupload(e){
     this.file = e.target.files[0];
     this.productform.patchValue({imageupload:this.file})
    console.log("file",this.productform.value);
  }
  product_save(){
    console.log(this.productform.value);
    this.mainservice.product_save(this.productform.value,this.file)
    .pipe()
    .subscribe(
      data =>{
        console.log(data);
      }
    )
  }

  gcodebtn(){
    this.router.navigate(['/unique_codes']);
  }


}
