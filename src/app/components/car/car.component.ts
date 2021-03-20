  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  filterCarText:string;
  cars: Car[] = [];
  carImages: CarImage[] = [];
  dataLoaded = false;
  constructor(
    private carService: CarService,
    private carImageService: CarimageService,
    private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params["brandId"] && params["colorId"]){
        this.getCarDetails(params["brandId"],params["colorId"])
      }else if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"])
      }else{
        this.getAllCarDetails();
      }
    })
  }


  getAllCarDetails() {
    this.carService.getAllCarDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      this.setPreviewImages(this.cars)
    });
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }

  setPreviewImages(cars:Car[]){
    cars.forEach(car => {
      this.carImageService.getCarImageByCarId(car.carId).subscribe((response) => {
        car.previewImagePath = "https://localhost:44336/" + response.data[0].imagePath;
      });
    });
  }

  getCarDetails(brandId:number,colorId:number){
    this.carService.getCarDetails(brandId,colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      this.setPreviewImages(this.cars)
    });
  }

  getCarDetailsByBrand(brandId:number){
    this.carService.getCarDetailsByBrand(brandId).subscribe((response) => {
      this.cars;{{brandId}} response.data;
      this.dataLoaded = true;
      this.setPreviewImages(this.cars)
    });
  }

  getCarDetailsByColor(colorId:number){
    this.carService.getCarDetailsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      this.setPreviewImages(this.cars)
    });
  }

}