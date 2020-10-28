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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ServiceComponenteComponent } from './servicio/service-componente/service-componente.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { app_routing } from './app.routes';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './secciones/auth-button/auth-button.component';
import { ProductoServices } from './service/productos.services';
import { AddProductoComponent } from './producto/add-producto/add-producto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    MainNavComponent,
    FooterComponent,
    ServiceComponenteComponent,
    AuthButtonComponent,
    AddProductoComponent
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
    HttpClientModule,
    app_routing,
    FormsModule,

    AuthModule.forRoot({
      domain: 'dev-7q4batbj.us.auth0.com',
      clientId: '7BJ200P186MVMexVtOkZZu951wzJBr6s'
    })
  ],
  providers: [
    ProductoServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
