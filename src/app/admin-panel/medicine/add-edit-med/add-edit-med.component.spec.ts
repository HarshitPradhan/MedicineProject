import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMedComponent } from './add-edit-med.component';

describe('AddEditMedComponent', () => {
  let component: AddEditMedComponent;
  let fixture: ComponentFixture<AddEditMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
