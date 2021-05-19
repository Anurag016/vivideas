import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueCodesComponent } from './unique-codes.component';

describe('UniqueCodesComponent', () => {
  let component: UniqueCodesComponent;
  let fixture: ComponentFixture<UniqueCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
