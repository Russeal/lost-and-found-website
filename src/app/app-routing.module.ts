import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundCreateComponent } from './layout/found-create/found-create.component';

import { LayoutComponent } from './layout/layout.component';
import { LostCreateComponent } from './layout/lost-create/lost-create.component';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { MyProfileComponent } from './layout/my-profile/my-profile.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: MainPageComponent },
    { path: 'my-profile', component: MyProfileComponent },
    { path: 'i-found', component: FoundCreateComponent },
    { path: 'i-lost', component: LostCreateComponent }
  ]},
  { path: 'en', component: LayoutComponent, children: [
        { path: '', component: MainPageComponent },
        { path: 'my-profile', component: MyProfileComponent },
        { path: 'i-found', component: FoundCreateComponent },
        { path: 'i-lost', component: LostCreateComponent }
  ]},
  // { path: 'administrator', component: AdministratorComponent },
  // { path: 'log-in', component: LogInComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
