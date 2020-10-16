import { Component, OnInit } from '@angular/core';
import { ServicioServices } from '../../servicios.services';

@Component({
  selector: 'app-service-componente',
  templateUrl: './service-componente.component.html',
  styleUrls: ['./service-componente.component.css']
})
export class ServiceComponenteComponent implements OnInit {

  listServiciosarray: any = [];

  constructor(private listserv: ServicioServices) { }

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios(){
    this.listserv.getServicios()
      .subscribe(
          res => {
            this.listServiciosarray = res;
          },
          err => console.error(err)
      );
  }
}


