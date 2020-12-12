import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamneseDetalhadaComponent } from './anamnese-detalhada.component';

describe('AnamneseDetalhadaComponent', () => {
  let component: AnamneseDetalhadaComponent;
  let fixture: ComponentFixture<AnamneseDetalhadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnamneseDetalhadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnamneseDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
