import { compileNgModuleFromRender2 } from "@angular/compiler/src/render3/r3_module_compiler";
import { Component } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';

// crear componente de incio

import { ServiceComponenteComponent } from './servicio/service-componente/service-componente.component';
import { ProductoComponent } from './producto/producto/producto.component';

const app_routes: Routes = [

     { path: 'Servicios', component: ServiceComponenteComponent },
     { path: 'Productos', component: ProductoComponent }
     // { path: '**', component: Inicio }
];

export const app_routing = RouterModule.forRoot(app_routes);
