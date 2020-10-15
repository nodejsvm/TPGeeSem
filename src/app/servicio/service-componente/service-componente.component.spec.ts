import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComponenteComponent } from './service-componente.component';

describe('ServiceComponenteComponent', () => {
  let component: ServiceComponenteComponent;
  let fixture: ComponentFixture<ServiceComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
