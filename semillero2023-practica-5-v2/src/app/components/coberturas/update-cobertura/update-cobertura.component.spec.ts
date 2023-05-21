import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoberturaComponent } from './update-cobertura.component';

describe('UpdateCoberturaComponent', () => {
  let component: UpdateCoberturaComponent;
  let fixture: ComponentFixture<UpdateCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoberturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
