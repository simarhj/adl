import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-cuentaah',
  styleUrls: ['./cuentaah.component.scss'],
  template: `
  <nb-card size="tiny">
    <nb-card-header>Cuenta de Ahorros</nb-card-header>
    <nb-card-body>
      <p>Nro. {{producto.id}}</p>
      <p></p>
      <p>Saldo disponible:</p>
      <b>{{producto.productAccountBalances.saldo_disponible.amount}}</b>
      <p></p>
      <p>En bolsillos: {{producto.productAccountBalances.saldo_canje.amount}}</p>
      <p>Saldo total: {{producto.productAccountBalances.saldo_actual.amount}}</p>
    </nb-card-body>
  </nb-card>`,
})
export class CuentaahComponent implements OnInit {

  @Input() producto : any;
  constructor() { }

  ngOnInit() {
  }

}
