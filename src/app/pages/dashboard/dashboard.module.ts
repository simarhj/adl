import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbListModule,
  NbToggleModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { CreditoComponent } from './credito/credito.component';
import { CuentaahComponent } from './cuentaah/cuentaah.component';
import { CuentacoComponent } from './cuentaco/cuentaco.component';
import { CertdtComponent } from './certdt/certdt.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbToggleModule,
    NbListModule,
  ],
  declarations: [
    DashboardComponent,
    ProductoComponent,
    TarjetaComponent,
    CreditoComponent,
    CuentaahComponent,
    CuentacoComponent,
    CertdtComponent,
  ],
})
export class DashboardModule { }
