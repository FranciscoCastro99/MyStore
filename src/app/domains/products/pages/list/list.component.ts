import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from '../../../shared/Models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  // Cart = signal<Product[]>([]); --> se cancela por el servicio creado, en su lugar se hace una inject de dependencias

  constructor(){
    const productinicial:Product[]= [
    {
      id: Date.now(),
      title: 'product 1',
      price: 2013,
      img: 'https://picsum.photos/640/640?r=23',
      creationAt: new Date().toISOString(),
    },
    {
      id: Date.now(),
      title: 'product 2',
      price: 2013,
      img: 'https://picsum.photos/640/640?r=12',
      creationAt: new Date().toISOString(),
    },
    {
      id: Date.now(),
      title: 'product 3',
      price: 2013,
      img: 'https://picsum.photos/640/640?r=1223',
      creationAt: new Date().toISOString(),
    },
    {
      id: Date.now(),
      title: 'product 1',
      price: 2013,
      img: 'https://picsum.photos/640/640?r=23',
      creationAt: new Date().toISOString(),
    },
    {
      id: Date.now(),
      title: 'product 2',
      price: 2013,
      img: 'https://picsum.photos/640/640?r=12',
      creationAt: new Date().toISOString(),
    },
    {
      id: Date.now(),
      title: 'product 3',
      price: 2013,
      img: 'https://picsum.photos/640/640?r=1223',
      creationAt: new Date().toISOString(),
    },
    {
      id: Date.now(),
      title: 'product 1',
      price: 2013,
      img: 'https://picsum.photos/640/640?r=23',
      creationAt: new Date().toISOString(),
    },
    {
      id: Date.now(),
      title: 'product 2',
      price: 2013,
      img: 'https://picsum.photos/640/640?r=12',
      creationAt: new Date().toISOString(),
    },
    {
      id: Date.now(),
      title: 'product 3',
      price: 2013,
      img: 'https://picsum.photos/640/640?r=1223',
      creationAt: new Date().toISOString(),
    },
  ];
  this.products.set(productinicial);

  }

  addToCart(newProduct:Product){
    this.cartService.addToCart(newProduct);
  }

  // fromChild(event:string){
  //   console.log("el padre esta escuchando")
  //   console.log(event);
  // }

  
}
