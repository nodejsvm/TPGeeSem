import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosComponent } from './producto/productos/productos.component';
import { ProductoComponent } from './producto/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
