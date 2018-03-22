import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ConfirmComponent } from './auth/confirm/confirm.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'confirm', component: ConfirmComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
