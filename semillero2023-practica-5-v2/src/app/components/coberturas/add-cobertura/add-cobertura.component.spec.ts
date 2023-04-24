import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoberturaComponent } from './add-cobertura.component';

describe('AddCoberturaComponent', () => {
  let component: AddCoberturaComponent;
  let fixture: ComponentFixture<AddCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoberturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
