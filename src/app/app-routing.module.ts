import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './routeguard/auth.guard';
import { CanActivateChildGuard } from './routeguard/can-activate-child.guard';
import { UsersComponent } from './users/users.component';
import { CanDeactivateGuard } from './routeguard/can-deactivate.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'create-user',component:CreateUserComponent,canDeactivate:[CanDeactivateGuard]},
  {path:'user-list',component:UserListComponent,canActivate:[AuthGuard]},
 {path:'users',component:UsersComponent,canActivateChild:[CanActivateChildGuard],
  children:[{path:'create-user',component:CreateUserComponent},
                    {path:'updateUser/:id',component:CreateUserComponent},
                    {path:'user-list',component:UserListComponent}]},
  
  {path:'',redirectTo:'/home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
