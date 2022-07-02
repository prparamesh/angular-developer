import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { LoginComponent } from '../login/login.component';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome/:username', component: WelcomeComponent },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  //imports: [CommonModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModuleModule {}
