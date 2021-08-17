import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  catagory_id: number,
  name: string,
  price: number,
  image: string,
  favourite: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Womens',
      image: '../../assets/categories/category-1.png'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Mens',
      image: '../../assets/categories/category-2.png'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: '../../assets/categories/category-3.png'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      catagory_id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-1.png',
      favourite: false
    }
    let prod2: IProduct = {
      id: 2,
      catagory_id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-2.png',
      favourite: false
    }
    let prod3: IProduct = {
      id: 3,
      catagory_id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-3.png',
      favourite: false
    }
    let prod4: IProduct = {
      id: 4, 
      catagory_id: 3,
      name: 'Kids T-Shirt',
      price: 40,
      image: '../../assets/products/prod-7.jfif',
      favourite: false
    }
    let prod5: IProduct = {
      id: 5,
      catagory_id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-4.png',
      favourite: false
    }
    let prod6: IProduct = {
      id: 6,
      catagory_id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-5.png',
      favourite: false
    }
    let prod7: IProduct = {
      id: 7,
      catagory_id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-6.png',
      favourite: false
    }
    let prod8: IProduct = {
      id: 8,
      catagory_id: 3,
      name: 'Kids T-Shirt',
      price: 40,
      image: '../../assets/products/prod-8.jfif',
      favourite: false
    }


    products.push(prod1, prod2, prod3,prod4, prod5, prod6, prod7, prod8);

    return products;
  }

  // getBestSellProducts() {
  //   let products = [];

  //   let prod1: IProduct = {
  //     id: 1,
  //     name: 'Womens T-Shirt',
  //     price: 55,
  //     image: '../../assets/products/prod-4.png'
  //   }
  //   let prod2: IProduct = {
  //     id: 2,
  //     name: 'Mens T-Shirt',
  //     price: 34,
  //     image: '../../assets/products/prod-5.png'
  //   }
  //   let prod3: IProduct = {
  //     id: 1,
  //     name: 'Womens T-Shirt',
  //     price: 40,
  //     image: '../../assets/products/prod-6.png'
  //   }
  //   let prod4: IProduct = {
  //     id: 1,
  //     name: 'Kids T-Shirt',
  //     price: 40,
  //     image: '../../assets/products/prod-8.jfif'
  //   }

  //   products.push(prod1, prod2, prod3,prod4);

  //   return products;
  // }
}
