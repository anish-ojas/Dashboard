import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { RippleModule } from 'primeng/ripple';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/home/list/list.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { InvoiceComponent } from './pages/home/invoice/invoice.component';
import {DialogModule} from 'primeng/dialog';
import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './pages/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    InvoiceComponent,
    AddUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    TieredMenuModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    Ng2SearchPipeModule,
    DialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
