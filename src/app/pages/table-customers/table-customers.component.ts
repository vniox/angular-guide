import { Component, ElementRef, ViewChild } from '@angular/core';
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

import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

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
    Menu,
  ],
  providers: [CustomerService],
})
export class TableCustomersComponent {
  @ViewChild('dt2') dt2!: Table;
  @ViewChild('container') container!: ElementRef<HTMLElement>;
  customers!: Customer[];
  representatives: any = [];

  fields: string[] = ['name', 'country.name', 'representative.name', 'company'];
  isLoading = false;

  items: any = [];

  constructor(private customerService: CustomerService) {
    this.items = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' },
    ];
  }

  ngOnInit() {
    this.customerService
      .getCustomersLarge()
      .then((customers) => (this.customers = customers));

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
    ];
  }

  handeInputSearch($event: Event, stringVal: string) {
    const input = $event.target as HTMLInputElement;
    this.dt2?.filterGlobal(input.value, stringVal);
  }

  filterr(value: any) {
    console.log(value);
  }

  showModal = false;
  stylePosition = {
    left: 0,
    top: 0,
  };

  handleClickOptions(e: Event) {
    this.showModal = true;

    const target = e.target as HTMLBodyElement;
    const rect = target.getBoundingClientRect();
    console.log(rect);
    this.stylePosition.top = rect.top + rect.height + 10;
    this.stylePosition.left = window.innerWidth - rect.left - rect.width / 2;

    const event = (type: string, callback: any) => {
      window.addEventListener(type, callback);
      return () => {
        window.removeEventListener(type, callback);
      };
    };

    const disableEvents = () => {
      // wheel();
      rezise();
      click();

      this.showModal = false;
    };

    // const wheel = event('wheel', () => {
    //   // disableEvents();
    //   // console.log('scroll');
    // });

    const rezise = event('resize', () => {
      disableEvents();
      console.log('resize');
    });

    const click = event('click', (e: Event) => {
      console.log(this.container);
      if (
        this.container &&
        !this.container?.nativeElement.contains(e.target as Node)
      ) {
        disableEvents();
      }
    });
  }
}
