import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/service';
import { Category } from 'src/app/models/category';
import { ServicioServices } from '../../service/servicios.services';
import { Router } from '@angular/router';
import { CategoryServices } from '../../service/category.services';

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
    idCat: 3,
    url: ''
  };

  cat: Category = {
    nombre: '',
    detalle: '',
    estado: ''
  };

  constructor(private servicioServices: ServicioServices, private categoryServices: CategoryServices, private router: Router) { }

  ngOnInit(): void {
  }

  listarServicios(): void{
    this.router.navigate(['Servicios']
    );
  }

  getCategory(): void {
    this.categoryServices.getCategory().subscribe(
      res => {
        this.serv = res;
      },
      err => console.error(err),
    );
  }

  createService(): void{
    this.servicioServices.postServ(this.serv).subscribe(
      res => {
        console.log(res);
        this.listarServicios();
       },
      err => console.error(err),
    );
  }
}
