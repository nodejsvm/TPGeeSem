import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/service';
import { Category } from 'src/app/models/category';
import { ServicioServices } from '../../service/servicios.services';
import { Router, ActivatedRoute } from '@angular/router';
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

  edit = false;

  constructor(private servicioServices: ServicioServices, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.servicioServices.getServiciosById(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.serv = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  // tslint:disable-next-line:typedef
  saveService() {
    this.servicioServices.putServ(this.serv.idServ, this.serv)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['Servicios']);
       },
      err => console.error(err),
    );
  }

  listarServicios(): void{
    this.router.navigate(['Servicios']);
  }

  // getCategory(): void {
  //   this.categoryServices.getCategory().subscribe(
  //     res => {
  //       this.serv = res;
  //     },
  //     err => console.error(err),
  //   );
  // }

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
