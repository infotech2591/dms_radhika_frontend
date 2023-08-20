import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AntibackdoorGuard } from './shared/guards/antibackdoor.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate : [AntibackdoorGuard]
  },
  {
    path: '',
    loadChildren: () => import('../app/dashboard/dashboard.module')
      .then(() => DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
