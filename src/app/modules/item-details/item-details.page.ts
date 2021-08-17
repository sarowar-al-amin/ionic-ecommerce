import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { DataService, IProduct, StorageService } from '../../services';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;

  public featuredProducts = [];
  public product: IProduct;

  public liked = true;

  constructor(
    private animatioCntrl: AnimationController,
    private data: DataService,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeVariation = 'size';
    
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



  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();
    } else {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
      .fromTo('opacity', '1', '0.2')
      .play();
    }
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }

  changeLikeValue(){
    this.liked !== this.liked;
  }
}
