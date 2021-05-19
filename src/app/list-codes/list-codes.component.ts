import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
@Component({
  selector: 'app-list-codes',
  templateUrl: './list-codes.component.html',
  styleUrls: ['./list-codes.component.css']
})
export class ListCodesComponent implements OnInit {
product:any;
items:any =[];
  constructor(private mainservice:MainService) { }

  ngOnInit(): void {
    this.getproduts();
  }

  getproduts(){
    this.mainservice.getProduts()
    .pipe()
    .subscribe(
      data =>{
        console.log("productdata",data);
        this.product = data.status;
        console.log("productdata",this.product);

      }
    )
  }

  product_change(e){
    console.log("ee",e);
    this.mainservice.getbatchno(e)
    .pipe()
    .subscribe(
      data =>{
        console.log("batch",data);
        this.items = data;
      
    })
  }

}
