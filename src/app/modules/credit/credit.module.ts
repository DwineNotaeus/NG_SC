import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditRoutingModule } from './credit-routing.module';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreditRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    DataTablesModule
  ]
})
export class CreditModule { }
