import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../Models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSlideMenu = signal(true);
  // @Input({ required: true }) carrito: Product[] = []; --> ya no se usa porque se hace con el servicio donde se inyecta
  // total = signal(0); -> se comenta porque pasa a ser llamada por el servicio
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogle() {
    this.hideSlideMenu.update((prevState) => !prevState);
  }



  // lo que esta acontinuación se comenta porque gracias a la injeccion de la dependencia
  //el servicio cumple la funcionalidad y los componentes solo la renderización
  //razón por la cual ya no se necesita enviar esta logica desde lo anterior
  // ngOnChanges(changes: SimpleChanges) {
  //   const carrito = changes['carrito'];
  //   if (carrito) {
  //     this.total.set(this.calcularTotal());
  //   }
  // }

  // calcularTotal() {
  //   return this.carrito.reduce((total, product) => total + product.price, 0);
  // }
}
