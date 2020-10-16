import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable
(
    {
        providedIn:'root'
    }    
)

export class ServicioServices{
    API_URI:string ="http://localhost:3000";
    constructor(private http:HttpClient){}

    getServicios(){
        return this.http.get(`${this.API_URI}/servicio`)
    }
}