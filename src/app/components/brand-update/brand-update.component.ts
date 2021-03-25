import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  brands: Brand[] = [];
  brandName: Brand;
  brandId: Brand;
  brandUpdateForm: FormGroup;

  constructor(
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createBrandUpdateForm();

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getBrandById(params['brandId']);
      }
    });
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.brandId, Validators.required],
      brandName: [this.brandName, Validators.required],
    });
  }

  getBrandById(brandId: number) {
    this.brandService.getBrand(brandId).subscribe((response) => {
      this.brands = response.data;
      Object.keys(this.brands).forEach((b: any) => {
        if (b == 'brandId') {
          this.brandId = this.brands[b];
        } else {
          this.brandName = this.brands[b];
        }
      });
      this.createBrandUpdateForm();
    });
  }

  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.updateBrand(brandModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı');
      });
    }
  }
}