import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable
(
    {
        providedIn:'root'
    }    
)

export class ProductoServices{
    API_URI:string ="http://localhost:3000";
    constructor(private http:HttpClient){
    }

    getProd(){
        return this.http.get(`${this.API_URI}/producto`)
    }
    
    postProd(datonuevo){
        return this.http.put(`${this.API_URI}/producto`,datonuevo)
    }

    deleteProd(idEliminar){
        return this.http.delete(`${this.API_URI}/producto/${idEliminar}`)
    }
}

