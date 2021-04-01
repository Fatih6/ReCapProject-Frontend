import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

import {AccordionModule} from 'primeng/accordion';
import { FileUploadModule } from 'ng2-file-upload';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { BrandAddComponent } from './components/add-components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/add-components/color-add/color-add.component';
import { CarAddComponent } from './components/add-components/car-add/car-add.component';
import { ColorUpdateComponent } from './components/update-components/color-update/color-update.component';
import { CarUpdateComponent } from './components/update-components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/update-components/brand-update/brand-update.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/auth-components/register/register.component';
import { AdminBrandsComponent } from './components/admin-components/admin-brands/admin-brands.component';
import { AdminCarsComponent } from './components/admin-components/admin-cars/admin-cars.component';
import { AdminColorsComponent } from './components/admin-components/admin-colors/admin-colors.component';
import { LoginComponent } from './components/auth-components/login/login.component';
import { AdminComponent } from './components/pages/admin/admin/admin.component';
import { DatePipe } from '@angular/common';
import { ChangePasswordComponent } from './components/profile-components/change-password/change-password.component';
import { UserInfosComponent } from './components/profile-components/user-infos/user-infos.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    RentalComponent,
    CustomerComponent,
    CarDetailComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CreditcardComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    ColorUpdateComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    RegisterComponent,
    AdminBrandsComponent,
    AdminCarsComponent,
    AdminColorsComponent,
    LoginComponent,
    AdminComponent,
    ChangePasswordComponent,
    UserInfosComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    SplitButtonModule,
    MenuModule,
    ConfirmDialogModule,
    PasswordModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    DropdownModule,
    DynamicDialogModule,
    AccordionModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
    DialogService,
    ConfirmationService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
