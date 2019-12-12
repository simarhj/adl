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
  
  constructor(private lector: ProductoService) {
    this.lector.getJSON().subscribe((data: any) => {
      //debugger;
      this.productos_lista = data;
    });
  }

  otros : boolean = false;

  llamarActivador(){
    this.otros = !this.otros;
  }



}
