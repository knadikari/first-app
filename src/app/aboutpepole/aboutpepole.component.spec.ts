import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpepoleComponent } from './aboutpepole.component';

describe('AboutpepoleComponent', () => {
  let component: AboutpepoleComponent;
  let fixture: ComponentFixture<AboutpepoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutpepoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpepoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
