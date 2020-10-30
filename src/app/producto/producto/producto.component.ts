import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  getProducts(): void {
    this.productoServices.getProd().subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err),
    );
  }

  deleteProduct(id: number): void {
    this.productoServices.deleteProd(id).subscribe(
      res => {
        console.log(res);
        this.getProducts();
      },
      err => console.error(err)
    );
  }
}

