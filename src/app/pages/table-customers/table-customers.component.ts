import { Component, ViewChild } from '@angular/core';
import { Customer } from '../../models/customers';
import { CustomerService } from '../../services/customer.service';

import { Table } from 'primeng/table';

import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
// import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customers.component.html',
  styleUrl: './table-customers.component.css',
  imports: [
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    SelectModule,
    // HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [CustomerService],
})
export class TableCustomersComponent {
  @ViewChild('dt2') dt2!: Table;
  customers!: Customer[];
  representatives: any = [];

  fields: string[] = ['name', 'country.name', 'representative.name', 'company'];
  isLoading = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService
      .getCustomersLarge()
      .then((customers) => (this.customers = customers));

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];
  }

  handeInputSearch($event: Event, stringVal: string) {
    const input = $event.target as HTMLInputElement;
    this.dt2?.filterGlobal(input.value, stringVal);
  }

  filterr(value: any) {
    console.log(value);
  }
}
