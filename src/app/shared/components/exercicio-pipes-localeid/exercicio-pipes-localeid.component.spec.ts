import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioPipesLocaleidComponent } from './exercicio-pipes-localeid.component';

describe('ExercicioPipesLocaleidComponent', () => {
  let component: ExercicioPipesLocaleidComponent;
  let fixture: ComponentFixture<ExercicioPipesLocaleidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioPipesLocaleidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioPipesLocaleidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
