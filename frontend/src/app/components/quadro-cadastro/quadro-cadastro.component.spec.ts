import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroCadastroComponent } from './quadro-cadastro.component';

describe('QuadroCadastroComponent', () => {
  let component: QuadroCadastroComponent;
  let fixture: ComponentFixture<QuadroCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadroCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuadroCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
