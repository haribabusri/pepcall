import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'sesionManagement', pathMatch:'full'},
  {path:'sesionManagement', loadChildren:()=> import('src/app/session-management/session-management.module').then(m=>m.SessionManagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
