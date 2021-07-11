import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMatchesComponent } from './components/update-matches/update-matches.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: "updateMatches", component: UpdateMatchesComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
