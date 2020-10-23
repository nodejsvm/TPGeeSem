import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { producto } from 'src/app/models/producto.models';
import { ProductoServices } from '../../productos.services'


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit, OnDestroy {

  listProduArray: any = [];
  productoSubscription:Subscription;
  eliminarProductoSubscription:Subscription;
  productoNuevo: producto;

  ///CREAR SUBSCRIPTION Y ELIMINAR EN NGONDESTROY CREAR OTRO IF

  constructor(private produc: ProductoServices) { }

  ngOnInit(): void {
    this.getProduct();
  }

  ngOnDestroy(): void {
    if(this.productoSubscription != null){
      this.productoSubscription.unsubscribe();
    }
    
    if(this.eliminarProductoSubscription != null){
      this.productoSubscription.unsubscribe();
    }
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
  
  guardarProduc(){
    this.productoNuevo = {
      nombre:(document.getElementById('nombre') as HTMLInputElement).value.toString(), 
      descripcion:(document.getElementById('descripcion') as HTMLInputElement).value.toString()
    };
    this.productoSubscription = this.produc.postProd(this.productoNuevo)
    .subscribe(
      res => {
        console.log(res);
      }, err => {
        console.error(err);
      }
    )
  }

  eliminarProduc(idProduct){
    this.eliminarProductoSubscription = this.produc.deleteProd(idProduct).subscribe(
      res => {
        console.log(res); 
        this.getProduct();
      }, err => {
        console.error(err);
      }
    )
  }
  
}

