import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44336/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getallcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsdetailsbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsdetailsbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
    getCarDetailsByCarId(carId:number){
      let newPath = this.apiUrl + "cars/getcardetailsbycarid?carid=" + carId;
      return this.httpClient
        .get<ListResponseModel<Car>>(newPath);
  }
}