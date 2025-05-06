import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../services/api.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-table',
  imports: [TableModule, ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  products: Product[] = [];

  private productService = inject(ApiService);

  // constructor(private productService: ApiService) {}

  ngOnInit(): void {
    this.productService.getProductsHttp().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
    });

    // this.productService.getProductsMini().then((data) => {
    //   // this.products = data;
    //   console.log(data);
    // });
  }
}
