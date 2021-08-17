import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, IProduct, StorageService } from '../../services';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  public featuredProducts = [];
  public product: IProduct;
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
  }

}
