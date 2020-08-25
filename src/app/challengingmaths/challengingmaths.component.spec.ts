import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengingmathsComponent } from './challengingmaths.component';

describe('ChallengingmathsComponent', () => {
  let component: ChallengingmathsComponent;
  let fixture: ComponentFixture<ChallengingmathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengingmathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengingmathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
