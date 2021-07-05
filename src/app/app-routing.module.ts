import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoliticalPageComponent } from './pages/political-page/political-page.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'political',component:PoliticalPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
