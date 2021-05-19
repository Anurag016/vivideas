import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCodesComponent } from './list-codes/list-codes.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { RegisterComponent } from './register/register.component';
import { UniqueCodesComponent } from './unique-codes/unique-codes.component';
import { AuthGuard} from './auth.guard';
const routes: Routes = [
  {
    path:'master',
    component:MasterComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'unique_codes',
    component:UniqueCodesComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'list_codes',
    component:ListCodesComponent,
    canActivate:[AuthGuard]
 
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
