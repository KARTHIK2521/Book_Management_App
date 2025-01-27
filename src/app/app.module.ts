import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './components/charts/charts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DeletebookComponent } from './components/deletebook/deletebook.component';
import { ViewbookComponent } from './components/viewbook/viewbook.component';
import { IssuebookComponent } from './components/issuebook/issuebook.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    AddBookComponent,
    ChartsComponent,
    PageNotFoundComponent,
    DeletebookComponent,
    ViewbookComponent,
    IssuebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
