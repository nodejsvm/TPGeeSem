import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable
(
    {
        providedIn: 'root'
    }
)

export class CategoryServices{
    API_URI = 'http://localhost:3000';
    constructor(private http: HttpClient){}

    // tslint:disable-next-line:typedef
    getCategory(){
        return this.http.get(`${this.API_URI}/categoria`);
    }
}
