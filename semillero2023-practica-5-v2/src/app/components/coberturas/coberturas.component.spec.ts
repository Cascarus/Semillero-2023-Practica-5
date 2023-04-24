import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturasComponent } from './coberturas.component';

describe('CoberturasComponent', () => {
  let component: CoberturasComponent;
  let fixture: ComponentFixture<CoberturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoberturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
