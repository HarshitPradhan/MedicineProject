import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.intercptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CategoryComponent } from './admin-panel/category/category.component';
import { ShowCatComponent } from './admin-panel/category/show-cat/show-cat.component';
import { AddEditCatComponent } from './admin-panel/category/add-edit-cat/add-edit-cat.component';
import { MedicineComponent } from './admin-panel/medicine/medicine.component';
import { ShowMedComponent } from './admin-panel/medicine/show-med/show-med.component';
import { AddEditMedComponent } from './admin-panel/medicine/add-edit-med/add-edit-med.component';
import { ForuserComponent } from './admin-panel/foruser/foruser.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
// import { CartComponent } from './home/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    CategoryComponent,
    ShowCatComponent,
    AddEditCatComponent,
    MedicineComponent,
    ShowMedComponent,
    AddEditMedComponent,
    ForuserComponent,
    CartComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true,
      positionClass: 'toast-top-right'
    }),
    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }