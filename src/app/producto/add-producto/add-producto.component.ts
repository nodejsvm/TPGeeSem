import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoServices } from '../../service/productos.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  prod: Producto = {
    nombre: '',
    estado: '',
    descripcion: '',
    precio: 0,
    idCat: 1,
    url: ''
  };

  edit = false;

  constructor(private productoServices: ProductoServices, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     // tslint:disable-next-line:no-unused-expression
     const params = this.activatedRoute.snapshot.params;
     if (params.id) {
       this.productoServices.getProductById(params.id)
       .subscribe(
         res => {
           console.log(res);
           this.prod = res;
           this.edit = true;
         },
         err => console.error(err)
       );
     }
  }

  // tslint:disable-next-line:typedef
  saveProduct() {
    this.productoServices.putProd(this.prod.idProd, this.prod)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['Producto']);
       },
      err => console.error(err),
    );
  }

  listarProductos(): void{
    this.router.navigate(['Producto']
    );
  }

  createProducto(): void{
    this.productoServices.postProd(this.prod).subscribe(
      res => {
        console.log(res);
        this.listarProductos();
      },
      err => console.error(err)
    );
  }
}
