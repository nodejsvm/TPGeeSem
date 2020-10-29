import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductoServices } from '../../service/productos.services';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit{
  products: any = [];

  ngOnInit(): void {
    this.getProducts();
  }

  constructor(private productoServices: ProductoServices) { }

  getProducts() {
    this.productoServices.getProd().subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err),
    );
  }

  deleteProduct(id: number){
    this.productoServices.deleteProd(id).subscribe(
      res => {
        console.log(res);
        this.getProducts();
      },
      err => console.error(err)
    );
  }
}

