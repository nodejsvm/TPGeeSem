import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './secciones/nav/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './secciones/footer/footer.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ServiceComponenteComponent } from './servicio/service-componente/service-componente.component';
import {MatGridListModule} from '@angular/material/grid-list';

import {HttpClienteModule} from "@angular/comon/http";
import { HttpClientModule } from '@angular/common/http';

const routes: Route[]=[
  {path: "",}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    MainNavComponent,
    FooterComponent,
    ServiceComponenteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
