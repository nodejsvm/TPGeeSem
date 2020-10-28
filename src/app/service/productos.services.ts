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

    getProd(): Observable<Producto>{
        return this.http.get(`${this.API_URI}/producto`);
    }

    postProd(producto: Producto): Observable<Producto>{
        return this.http.post(`${this.API_URI}/producto`, producto);
    }

    deleteProd(idEliminar: number): Observable<Producto>{
        return this.http.delete(`${this.API_URI}/producto/${idEliminar}`);
    }

    putProd(id: number, updateProduct: Producto): Observable<Producto>{
        return this.http.put(`${this.API_URI}/producto/${id}`, updateProduct);
    }
}

