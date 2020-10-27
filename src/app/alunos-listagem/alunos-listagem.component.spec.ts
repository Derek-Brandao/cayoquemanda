import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosListagemComponent } from './alunos-listagem.component';

describe('AlunosListagemComponent', () => {
  let component: AlunosListagemComponent;
  let fixture: ComponentFixture<AlunosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
