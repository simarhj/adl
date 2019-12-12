import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-certdt',
  styleUrls: ['./certdt.component.scss'],
  template: `
  <nb-card size="tiny">
    <nb-card-header>CDT</nb-card-header>
    <nb-card-body>
      <p>Nro. {{producto.id}}</p>
      <p></p>
      <p>Valor Invertido:</p>
      <b>{{producto.productAccountBalances.valor_constitucion.amount}}</b>
      <p></p>
      <p>Plazo {{producto.term.count}}</p>
      <p>Fecha de vencimiento:</p>
      <p>P{{producto.dueDate}}</p>
    </nb-card-body>
  </nb-card>`,
})
export class CertdtComponent implements OnInit {

  @Input() producto : any;
  constructor() { }

  ngOnInit() {
  }

}
