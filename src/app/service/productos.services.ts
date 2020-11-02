import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';

@Injectable
(
    {
        providedIn: 'root'
    }
)

export class ProductoServices{

    API_URI = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getProd(){
        return this.http.get(`${this.API_URI}/producto`);
    }

    getProductById(idEditar: number){
        return this.http.get(`${this.API_URI}/producto/${idEditar}`);
    }

    postProd(producto: Producto){
        return this.http.post(`${this.API_URI}/producto`, producto);
    }

    deleteProd(idEliminar: number){
        return this.http.delete(`${this.API_URI}/producto/${idEliminar}`);
    }

    putProd(id: number, updateProduct: Producto){
        return this.http.put(`${this.API_URI}/producto/${id}`, updateProduct);
    }
}

