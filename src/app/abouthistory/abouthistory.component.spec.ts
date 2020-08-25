import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthistoryComponent } from './abouthistory.component';

describe('AbouthistoryComponent', () => {
  let component: AbouthistoryComponent;
  let fixture: ComponentFixture<AbouthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
