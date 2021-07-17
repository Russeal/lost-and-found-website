import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './layout/contact/contact.component';
import { FoundCreateComponent } from './layout/found-create/found-create.component';
import { ItemDetailComponent } from './layout/items/item-detail/item-detail.component';
import { ItemEditComponent } from './layout/items/item-edit/item-edit.component';
import { ItemsComponent } from './layout/items/items.component';
import { MyItemsComponent } from './layout/items/my-items/my-items.component';
import { NewItemComponent } from './layout/items/new-item/new-item.component';

import { LayoutComponent } from './layout/layout.component';
import { LostCreateComponent } from './layout/lost-create/lost-create.component';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { MyProfileComponent } from './layout/my-profile/my-profile.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: MainPageComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'my-items', component: MyItemsComponent },
    { path: 'new-item', component: NewItemComponent },
    { path: 'items/:id', component: ItemDetailComponent },
    { path: 'edit-item/:id', component: ItemEditComponent },
    { path: 'contact/:id', component: ContactComponent },
    { path: 'my-profile', component: MyProfileComponent },
    { path: 'i-found', component: FoundCreateComponent },
    { path: 'i-lost', component: LostCreateComponent }
  ]},
  { path: 'en', component: LayoutComponent, children: [
        { path: '', component: MainPageComponent },
        { path: 'items', component: ItemsComponent },
        { path: 'my-items', component: MyItemsComponent },
        { path: 'new-item', component: NewItemComponent },
        { path: 'items/:id', component: ItemDetailComponent },
        { path: 'edit-item/:id', component: ItemEditComponent },
        { path: 'contact/:id', component: ContactComponent },
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
