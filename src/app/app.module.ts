import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { ImgUploaderComponent } from './layout/img-uploader/img-uploader.component';
import { SignInComponent } from './layout/sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { MyProfileComponent } from './layout/my-profile/my-profile.component';
import { FoundCreateComponent } from './layout/found-create/found-create.component';
import { LostCreateComponent } from './layout/lost-create/lost-create.component';
import { SearchFormComponent } from './layout/main-page/search-form/search-form.component';
import { ItemsComponent } from './layout/items/items.component';
import { ItemDetailComponent } from './layout/items/item-detail/item-detail.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ItemEditComponent } from './layout/items/item-edit/item-edit.component';
import { NewItemComponent } from './layout/items/new-item/new-item.component';
import { MyItemsComponent } from './layout/items/my-items/my-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgUploaderComponent,
    SignInComponent,
    LayoutComponent,
    MainPageComponent,
    MyProfileComponent,
    FoundCreateComponent,
    LostCreateComponent,
    SearchFormComponent,
    ItemsComponent,
    ItemDetailComponent,
    ContactComponent,
    ItemEditComponent,
    NewItemComponent,
    MyItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
