import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackUserSearchesComponent } from './track-user-searches.component';

describe('TrackUserSearchesComponent', () => {
  let component: TrackUserSearchesComponent;
  let fixture: ComponentFixture<TrackUserSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackUserSearchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackUserSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
