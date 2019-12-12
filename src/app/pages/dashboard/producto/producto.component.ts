import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-producto',
  styleUrls: ['./producto.component.scss'],
  template: `
  <nb-card size="tiny">
    <nb-card-header>{{producto.accountInformation.productType}}</nb-card-header>
    <nb-card-body>
      {{producto.accountInformation.bank}}
    </nb-card-body>
  </nb-card>`,
})
export class ProductoComponent implements OnInit {

  @Input() producto : any;
  constructor() { //Prueba
  }

  ngOnInit() {
  }

}
