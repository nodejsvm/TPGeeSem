import { Component, OnInit } from '@angular/core';
import { ProductoServices } from '../../productos.services'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  listProduArray: any = [];

  constructor(private produc: ProductoServices) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.produc.getProd()
    .subscribe(
      res => {
        this.listProduArray = res;
      },
      err => console.error(err)
    )
  }
}

