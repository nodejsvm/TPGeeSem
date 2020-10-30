import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/service';
import { ServicioServices } from '../../service/servicios.services';

@Component({
  selector: 'app-add-servicio',
  templateUrl: './add-servicio.component.html',
  styleUrls: ['./add-servicio.component.css']
})
export class AddServicioComponent implements OnInit {

  serv: Servicio = {
    nombre: '',
    estado: '',
    descripcion: '',
    precio: 0,
    idCat: 1,
    url: ''
  };

  constructor(private servicioServices: ServicioServices) { }

  ngOnInit(): void {
  }

  createService(): void{
    this.servicioServices.postServ(this.serv).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
