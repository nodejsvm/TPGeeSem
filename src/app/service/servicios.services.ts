import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/service';
import { Observable } from 'rxjs';

@Injectable
(
    {
        providedIn: 'root'
    }
)

export class ServicioServices{

    API_URI = 'http://localhost:3000';

    constructor(private http: HttpClient){ }

    getServicios(){
        return this.http.get(`${this.API_URI}/servicio`);
    }

    deleteService(idEliminar: number){
        return this.http.delete(`${this.API_URI}/servicio/${idEliminar}`);
    }

    postServ(servicio: Servicio){
        return this.http.post(`${this.API_URI}/servicio`, servicio);
    }

    putServ(id: number, updateServicio: Servicio){
        return this.http.put(`${this.API_URI}/servicio/${id}`, updateServicio);
    }
}