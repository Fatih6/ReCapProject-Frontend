import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44336/api/";
  constructor(private httpClient:HttpClient) { }

 
  getAllRentalDetail():Observable<ListResponseModel<RentalDetail>> {
    let newPath = this.apiUrl + "rentals/getallrentaldetails"
    return this.httpClient
      .get<ListResponseModel<RentalDetail>>(this.apiUrl);
  }

  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getallbycarid?=" + carId
    return this.httpClient
    .get<ListResponseModel<Rental>>(newPath);
  }
  
  addRental(rental:Rental){
    let newPath = this.apiUrl + "rentals/add"
    this.httpClient.post(newPath,rental).subscribe()
  }

  getLastByCarId(carId:number):Observable<Rental>{
    let newPath = this.apiUrl + "rentals/getlastbycarid?carid=" + carId
    return this.httpClient.get<Rental>(newPath);
  }

  isRentable(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl + "rentals/isrentable"
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
}