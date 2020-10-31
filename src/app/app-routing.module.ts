import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IocontainerComponent } from './io-module/iocontainer/iocontainer.component';
import { JokesComponent } from './jokes/jokes.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { QrComponent } from './qr/qr.component';


const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'io', component: IocontainerComponent,
  canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'jokes', component: JokesComponent,
  canActivate: [AuthGuard]},
  {path: 'directive-example', component: DirectiveExampleComponent,
  canActivate: [AuthGuard]},
  {path: 'qr', component: QrComponent,
  canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
