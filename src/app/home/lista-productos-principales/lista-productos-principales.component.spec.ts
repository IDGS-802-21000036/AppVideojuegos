import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosPrincipalesComponent } from './lista-productos-principales.component';

describe('ListaProductosPrincipalesComponent', () => {
  let component: ListaProductosPrincipalesComponent;
  let fixture: ComponentFixture<ListaProductosPrincipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProductosPrincipalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaProductosPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
