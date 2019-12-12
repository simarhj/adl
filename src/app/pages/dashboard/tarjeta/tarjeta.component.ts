import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-tarjeta',
  styleUrls: ['./tarjeta.component.scss'],
  template: `
  <nb-card size="tiny">
    <nb-card-header>Tarjeta de Credito</nb-card-header>
    <nb-card-body>
      <p>Nro. {{producto.id}}</p>
      <p></p>
      <p>Cupo disponible:</p>
      <b>{{producto.productAccountBalances.cupo_disponible_compras_pesos.amount}}</b>
      <p></p>
      <p>Total Gastado {{producto.productAccountBalances.pago_total_pesos.amount}}</p>
      <p>Fecha de corte:</p>
      <p>P{{producto.dueDate}}</p>
    </nb-card-body>
  </nb-card>`,
})
export class TarjetaComponent implements OnInit {

  @Input() producto : any;
  constructor() { }

  ngOnInit() {
  }

}
