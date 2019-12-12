import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-cuentaco',
  styleUrls: ['./cuentaco.component.scss'],
  template: `
  <nb-card size="tiny">
    <nb-card-header>Cuenta Corriente</nb-card-header>
    <nb-card-body>
      <p>Nro. {{producto.id}}</p>
      <p></p>
      <p *ngIf="producto.productAccountBalances.saldo_disponible.amount<0; else saldo">En sobregiro:</p>
      <ng-template #saldo>
        Saldo disponible:
      </ng-template>
      
    </nb-card-body>
  </nb-card>`,
})
export class CuentacoComponent implements OnInit {

  @Input() producto : any;
  constructor() { }

  ngOnInit() {
  }

}
