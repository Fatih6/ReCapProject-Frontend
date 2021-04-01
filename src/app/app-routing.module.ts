import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/add-components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/update-components/brand-update/brand-update.component';
import { CarAddComponent } from './components/add-components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/update-components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/add-components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/update-components/color-update/color-update.component';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './components/pages/admin/admin/admin.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"rentals", component:RentalComponent},
  {path:"customers", component:CustomerComponent},    
  {path:"car/brand/:brandId", component:CarComponent,},
  {path:"car/color/:colorId", component:CarComponent},
  {path:"car/brand/:brandId/color/:colorId", component:CarComponent},
  {path:"cardetails/:carId", component:CarDetailComponent},
  {path:"rental/:carId", component:RentalComponent,canActivate:[LoginGuard]},
  {path:"creditcard/:rental", component:CreditcardComponent,canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent, canActivate:[LoginGuard]},
  {path:"colors/add",component:ColorAddComponent,canActivate:[AdminGuard]},
  {path:"cars/add",component:CarAddComponent,canActivate:[AdminGuard]},
  {path: 'brands/update/:brandId',component: BrandUpdateComponent,canActivate:[AdminGuard]},
  {path: 'colors/update/:colorId',component: ColorUpdateComponent,canActivate:[AdminGuard]},
  {path: 'cars/update/:carId',component: CarUpdateComponent,canActivate:[AdminGuard]},
  {path: "admin", component: AdminComponent,canActivate:[AdminGuard]},
  {path: "profile", component: ProfileComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
