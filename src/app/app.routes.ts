import { Component } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';

// crear componente de incio

import { ServiceComponenteComponent } from './servicio/service-componente/service-componente.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { AddProductoComponent } from './producto/add-producto/add-producto.component';
import { AddServicioComponent } from './servicio/add-servicio/add-servicio.component';
import { NosotrosComponent } from './secciones/nosotros/nosotros.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';

// tslint:disable-next-line:variable-name
const app_routes: Routes = [

     { path: 'Servicios', component: ServiceComponenteComponent },
     { path: 'Producto', component: ProductoComponent },
     { path: 'AddProducto', component: AddProductoComponent },
     { path: 'AddServicio', component: AddServicioComponent},
     { path: 'Servicio/Edit/:id', component: AddServicioComponent},
     { path: 'Producto/Edit/:id', component: AddProductoComponent},
     { path: 'Nosotros', component: NosotrosComponent},
     { path: 'Contacto', component: ContactoComponent},
     { path: '**', redirectTo: '/Nosotros', pathMatch: 'full'}
];

// tslint:disable-next-line:variable-name
export const app_routing = RouterModule.forRoot(app_routes);
