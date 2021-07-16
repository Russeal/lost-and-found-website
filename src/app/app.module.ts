import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgUploaderComponent } from './layout/img-uploader/img-uploader.component';
import { SignInComponent } from './layout/sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { MyProfileComponent } from './layout/my-profile/my-profile.component';
import { FoundCreateComponent } from './layout/found-create/found-create.component';
import { LostCreateComponent } from './layout/lost-create/lost-create.component';
import { SearchFormComponent } from './layout/main-page/search-form/search-form.component';

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
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
