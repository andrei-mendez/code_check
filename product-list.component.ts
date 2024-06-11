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
    products: Product[] = [
        {
            name: 'Product 1',
            category: 'Category 1',
            description: 'Description for product 1',
            imageUrl: 'assets/images/product1.jpg',
            price: 19.99
        },
        {
            name: 'Product 2',
            category: 'Category 2',
            description: 'Description for product 2',
            imageUrl: 'assets/images/product2.jpg',
            price: 29.99
        }
    ];
}
