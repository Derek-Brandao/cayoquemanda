import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliaAnamneseComponent } from './avalia-anamnese.component';

describe('AvaliaAnamneseComponent', () => {
  let component: AvaliaAnamneseComponent;
  let fixture: ComponentFixture<AvaliaAnamneseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliaAnamneseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliaAnamneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
