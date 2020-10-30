import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicioServices } from '../../service/servicios.services';


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

  getServicios(): void{
    this.listserv.getServicios()
      .subscribe(
          res => {
            this.listServiciosarray = res;
          },
          err => console.error(err)
      );
  }

  deleteService(id: number): void{
    this.listserv.deleteService(id)
    .subscribe(
      res => {
        console.log(res);
        this.getServicios();
      },
      err => console.error(err)
    );
  }


}


