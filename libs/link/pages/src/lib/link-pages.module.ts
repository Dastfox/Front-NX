import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {LinkUiModule}from '@front-nx/link/ui';
// import { LinkCreateComponent } from 'libs/link/ui/src/lib/link-create/link-create.component';
import { HomepageComponent } from './homepage/homepage.component';



const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'list', component: LinkListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, LinkUiModule],
  declarations: [HomepageComponent],
  exports: [RouterModule],
})
export class LinkPagesModule {}