import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminColorsComponent } from './admin-colors.component';

describe('AdminColorsComponent', () => {
  let component: AdminColorsComponent;
  let fixture: ComponentFixture<AdminColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
