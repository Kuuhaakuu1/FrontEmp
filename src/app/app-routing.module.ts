import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerComponent } from './components/scheduler.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
