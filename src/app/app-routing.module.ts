import { AuthRoutingModule } from './auth/auth-routing.module';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { RouterModule, Routes } from '@angular/router';


import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  // Parent routes, they are public
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoPageFoundComponent
  },
];


@NgModule({
  imports: [
    // Setup the routes for the router module
    AuthRoutingModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
