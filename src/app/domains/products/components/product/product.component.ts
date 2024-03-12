import { Component, Input, Output, EventEmitter } from '@angular/core'; //se debe poner EvenEmitter en esta sección y no en otra, ya que te puede aparecer error
import { Product } from '../../../shared/Models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product;
  // @Input({required:true}) price:number= 0;
  // @Input({required:true}) title:string='';

  @Output() addToCart = new EventEmitter;
  
  addToCartHandler(){
    console.log('click from child');
    this.addToCart.emit(this.product);
  }


}
