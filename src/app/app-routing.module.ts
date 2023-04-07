import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthguardnameGuard } from './authguardname.guard';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DemoComponent } from './components/demo/demo.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { ForgetpasswordComponent } from './components/frogetpassword/forgetpassword/forgetpassword.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TrashComponent } from './components/trash/trash.component';  
import { Demo1Component } from './components/demo1/demo1.component';



const routes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login',component: LoginComponent},
  {path: 'forgetpassword',component:ForgetpasswordComponent },
  {path: 'resetpassword',component:ResetpasswordComponent},
  {path: 'dashboard',canActivate:[AuthguardnameGuard],component: DashboardComponent},
  {path: 'dashboard',canActivate:[AuthguardnameGuard],component: DashboardComponent, children:[{path:'notes',component:GetallnotesComponent}]},
  {path: 'dashboard',canActivate:[AuthguardnameGuard],component: DashboardComponent, children:[{path:'archive',component:ArchiveComponent}]},
  {path: 'dashboard',canActivate:[AuthguardnameGuard],component: DashboardComponent, children:[{path:'trash',component:TrashComponent}]},
  {path: 'demo', component:DemoComponent},
  {path:'demo1', component:Demo1Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
