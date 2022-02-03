import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';

import { HomeComponent } from './pages/home/home.component';
import { InvoiceComponent } from './pages/home/invoice/invoice.component';
import { ListComponent } from './pages/home/list/list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'list',component:ListComponent},
  {path:'invoice',component:InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
