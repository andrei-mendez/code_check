import { Component } from '@angular/core';

interface Product {
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    price: number;
}

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    products: Product[] = [/* Your product data here */];
}
