import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarimageService } from './carimage.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44336/api/"
  constructor(private httpClient:HttpClient) { }

  getAllCarDetails():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsdetails"
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByBrand(brandId:number){
    let newPath = this.apiUrl + "cars/getcarsdetails?brandId=" + brandId;
    return this.httpClient
      .get<ListResponseModel<CarimageService>>(newPath);
      
  }

  getCarDetailsByColor(colorId:number){
    let newPath = this.apiUrl + "cars/getcarsdetails?colorId=" + colorId;
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(brandId:number, colorId:number){
    let newPath = this.apiUrl + "cars/getcarsdetails?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByCarId(carId:number){
    let newPath = this.apiUrl + "cars/getcarsdetails?carId=" + carId;
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath);
  }
}
