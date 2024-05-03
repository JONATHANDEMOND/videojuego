import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVideojuegosComponent } from './detalles-videojuegos.component';

describe('DetallesPeliculasComponent', () => {
  let component: DetallesVideojuegosComponent;
  let fixture: ComponentFixture<DetallesVideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesVideojuegosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
