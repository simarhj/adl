import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductoService } from '../../@core/data/producto.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }
  productos_lista: any = [] ;
  cdts : any = [];
  cah : any = [];
  cco : any = [];
  tcr : any = [];
  cre : any = [];
  
  constructor(private lector: ProductoService) {
    this.lector.getJSON().subscribe((data: any) => {
      //debugger;
      this.productos_lista = data;
      for (let index = 0; index < this.productos_lista.length; index++) {
        const element = this.productos_lista[index];
        if(element.accountInformation.productType=="CERTIFIED_DEPOSIT_TERM"){
          this.cdts.push(element);
        }
        if(element.accountInformation.productType=="DEPOSIT_ACCOUNT"){
          this.cah.push(element);
        }
        if(element.accountInformation.productType=="CURRENT_ACCOUNT"){
          this.cco.push(element);
        }
        if(element.accountInformation.productType=="CREDIT"){
          this.cre.push(element);
        }
        if(element.accountInformation.productType=="CREDIT_CARD"){
          this.tcr.push(element);
        }
      }
      console.log(this.productos_lista);
    });
  }

  otros : boolean = false;

  llamarActivador(){
    this.otros = !this.otros;
  }



}
