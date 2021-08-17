import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, IProduct, StorageService } from '../../services';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.page.html',
  styleUrls: ['./categories-list.page.scss'],
})
export class CategoriesListPage implements OnInit {
  public featuredProducts = [];
  public catagorys = [];
  constructor(
    private data: DataService,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id;
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('catagoryId')){
        return;
      }
      id = paramMap.get('catagoryId');
    })
    
    // console.log(id);
    this.featuredProducts = this.data.getFeaturedProducts();
    // this.product = this.featuredProducts[id - 1];
    for(let i = 0; i < this.featuredProducts.length; i++){
      if(this.featuredProducts[i].catagory_id == id){
        this.catagorys.push(this.featuredProducts[i]);
      }
    }

    // console.log(this.catagorys);
  }

}
