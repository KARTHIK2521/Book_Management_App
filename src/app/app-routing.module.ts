import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './shared/guard/auth.guard';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ViewbookComponent } from './components/viewbook/viewbook.component';
import { DeletebookComponent } from './components/deletebook/deletebook.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IssuebookComponent } from './components/issuebook/issuebook.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[authGuard]
  },
  {
    path:'addBook',
    component:AddBookComponent,
    canActivate:[authGuard]
  },
  {
    path:'viewBook',
    component:ViewbookComponent,
    canActivate:[authGuard]
  },
  {
    path:'deleteBook',
    component:DeletebookComponent,
    canActivate:[authGuard]
  },
  {
    path:'issueBook',
    component:IssuebookComponent,
    canActivate:[authGuard]
  },
  {
    path:'not-found',
    component:PageNotFoundComponent,
  },
  {
    path:'**',
    component:PageNotFoundComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
