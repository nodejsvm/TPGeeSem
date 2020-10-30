import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoServices } from '../../service/productos.services';
import { Router } from '@angular/router';

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

  constructor(private productoServices: ProductoServices, private router: Router) { }

  ngOnInit(): void {
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
