import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindgamesComponent } from './mindgames.component';

describe('MindgamesComponent', () => {
  let component: MindgamesComponent;
  let fixture: ComponentFixture<MindgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
