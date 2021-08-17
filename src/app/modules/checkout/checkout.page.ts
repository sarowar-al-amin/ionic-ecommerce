import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, IProduct, StorageService } from '../../services';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public featuredProducts = [];
  public product: IProduct;
  public numberOfItem = 1;
  public price = 0;
  public subTotal = 0;

  constructor(
    private data: DataService,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let id;
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')){
        return;
      }
      id = paramMap.get('productId');
    })
    
    // console.log(id);
    this.featuredProducts = this.data.getFeaturedProducts();
    this.product = this.featuredProducts[id - 1];

    // console.log(this.product);
    this.subTotal = this.product.price;
    this.price = this.subTotal + 10;
  }

  totalPrice(){
    if(this.numberOfItem > 0){
      this.subTotal = this.numberOfItem*this.product.price;
      this.price = this.subTotal + 10;
    }else{
      this.subTotal = 0;
      this.price = 0;
    }
    
  }
  decrement(){
    if(this.numberOfItem > 0){
      this.numberOfItem--;
    }  
    this.totalPrice();
  }

  increment(){
    this.numberOfItem++;
    this.totalPrice();
  }

}
