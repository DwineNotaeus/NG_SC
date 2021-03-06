import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { ClientComponent } from './modules/client/client.component';

const routes: Routes = [

  { 
    path: "", 
    component: LayoutsComponent,
    children: [
      {
        path: "Credit",
        loadChildren: () => import("./modules/credit/credit.module").then((m) => m.CreditModule)
      }
    ]
  
  },
  {
    path: "client",
    component: ClientComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
