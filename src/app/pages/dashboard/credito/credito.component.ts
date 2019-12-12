import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-credito',
  styleUrls: ['./credito.component.scss'],
  template: `
  <nb-card size="tiny">
    <nb-card-header>Credito</nb-card-header>
    <nb-card-body>
      <p>Nro. {{producto.id}}</p>
      <p></p>
      <p>Te falta por pagar:</p>
      <b></b>
      <p></p>
    </nb-card-body>
  </nb-card>`,
})
export class CreditoComponent implements OnInit {

  @Input() producto : any;
  constructor() { }

  ngOnInit() {
  }

}
