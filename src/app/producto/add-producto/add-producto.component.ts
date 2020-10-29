import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoServices } from '../../service/productos.services';
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
    idCat: 1
  };

  constructor(private productoServices: ProductoServices) { }

  ngOnInit(): void {
  }

  createProducto(): void{
    this.productoServices.postProd(this.prod).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
