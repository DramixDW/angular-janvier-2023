import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EmailComponent } from './pages/contact/email/email.component';
import { AdminGuard } from './admin.guard';
import { MatchGuard } from './match.guard';
import { AutreGuard } from './autre.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'contact',
  canMatch: [MatchGuard],
  canActivate: [AdminGuard],
  canDeactivate: [AutreGuard],
  component: ContactComponent,
  children: [{
    path: 'quelquechose',
    component: NotFoundComponent
  }, {
    path: ':id',
    component: EmailComponent
  }]
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
