import { Component } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';

// crear componente de incio

import { ServiceComponenteComponent } from './servicio/service-componente/service-componente.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { AddProductoComponent } from './producto/add-producto/add-producto.component';
import { AddServicioComponent } from './servicio/add-servicio/add-servicio.component';

// tslint:disable-next-line:variable-name
const app_routes: Routes = [

     { path: 'Servicios', component: ServiceComponenteComponent },
     { path: 'Productos', component: ProductoComponent },
     { path: 'AddProducto', component: AddProductoComponent },
     { path: 'AddServicio', component: AddServicioComponent},
     { path: '**', redirectTo: '/Producto', pathMatch: 'full'}
];

// tslint:disable-next-line:variable-name
export const app_routing = RouterModule.forRoot(app_routes);
