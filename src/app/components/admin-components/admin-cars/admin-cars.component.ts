import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CarAddComponent } from '../../add-components/car-add/car-add.component';
import { CarUpdateComponent } from '../../update-components/car-update/car-update.component';

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.css']
})
export class AdminCarsComponent implements OnInit {

  cars: Car[];
  cols: any[];

  constructor(
    private carService: CarService,
    private config: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private toastrService: ToastrService) { }

  ngOnInit() {
      this.getCars();
      this.setColumns();
      this.setConfig();
  }

  getCars(){
    this.carService.getCarsDetails().subscribe(response => this.cars = response.data);
  }

  setColumns(){
    this.cols = [
      { field: 'carid', header: 'Id' },
      { field: 'brand', header: 'Marka' },
      { field: 'color', header: 'Renk' },
      { field: 'modelyear', header: 'Model yılı'},
      { field: 'dailyprice', header: 'Günlük fiyat'},
      { field: 'description', header: 'Açıklama'}
  ];
  }

  setConfig(){
    this.config.filterMatchModeOptions = {
      text: [
          FilterMatchMode.STARTS_WITH,
          FilterMatchMode.CONTAINS,
          FilterMatchMode.NOT_CONTAINS,
          FilterMatchMode.ENDS_WITH,
          FilterMatchMode.EQUALS,
          FilterMatchMode.NOT_EQUALS
      ],
      numeric: [
          FilterMatchMode.EQUALS,
          FilterMatchMode.NOT_EQUALS,
          FilterMatchMode.LESS_THAN,
          FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
          FilterMatchMode.GREATER_THAN,
          FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
      ],
      date: [
          FilterMatchMode.DATE_IS,
          FilterMatchMode.DATE_IS_NOT,
          FilterMatchMode.DATE_BEFORE,
          FilterMatchMode.DATE_AFTER
      ]
    }
  }

  delete(car:Car) {
    this.confirmationService.confirm({
        message: car.modelYear + ' ' +car.brandName + ' adlı arabayı silmek istediğinize emin misiniz?',
        accept: () => {
          
          let deletedCar:Car = {carId:car.carId};
          this.carService.deleteCar(deletedCar).subscribe(response => {
            this.toastrService.success(response.message,"Başarılı")
            setTimeout(function(){
              location.reload()
            },400)
          })
        }
    });
  }

  update(car:Car){
    const ref = this.dialogService.open(CarUpdateComponent,{
      data: {
        carDetail: car
      },
      header: 'Araba güncelle',
      width: '20%'
    });
  }

  add() {
    const ref = this.dialogService.open(CarAddComponent, {
        header: 'Araba ekle',
        width: '20%'
    });
  }
}
