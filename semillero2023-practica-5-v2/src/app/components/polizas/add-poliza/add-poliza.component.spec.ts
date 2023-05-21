import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolizaComponent } from './add-poliza.component';

describe('AddPolizaComponent', () => {
  let component: AddPolizaComponent;
  let fixture: ComponentFixture<AddPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPolizaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
