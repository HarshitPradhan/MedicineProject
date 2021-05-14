import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForuserComponent } from './foruser.component';

describe('ForuserComponent', () => {
  let component: ForuserComponent;
  let fixture: ComponentFixture<ForuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
