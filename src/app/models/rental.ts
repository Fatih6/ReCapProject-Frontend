export interface Rental{
    id?:number;
    carId:number;
    customerId?:string;
    rentDate?:Date;
    rentStartDate:Date;
    rentEndDate?:Date;
    returnDate?:Date;
    totalRentPrice?:number;
}