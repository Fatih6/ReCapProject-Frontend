import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

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

  getCarById(carId: number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsdetails?carId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByBrand(brandId:number){
    let newPath = this.apiUrl + "cars/getcarsdetails?brandId=" + brandId;
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath);
      
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

  addCar(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl + "cars/add"
    return this.httpClient
    .post<ResponseModel>(newPath,car)
  }

  deleteCar(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl + "cars/delete"
    return this.httpClient
    .request<ResponseModel>("DELETE",newPath,{
      body: car
    })
  }

  updateCar(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl + "cars/update"
    return this.httpClient
    .put<ResponseModel>(newPath,car)
  }
}