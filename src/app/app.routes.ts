import { Routes } from '@angular/router';

import { TableComponent } from './pages/table/table.component';
import { LoginComponent } from './pages/login/login.component';
import { TableCustomersComponent } from './pages/table-customers/table-customers.component';

export const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'table-2', component: TableCustomersComponent },
];
