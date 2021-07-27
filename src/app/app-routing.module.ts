import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMatchesComponent } from './components/update-matches/update-matches.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "updateMatches", component: UpdateMatchesComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
