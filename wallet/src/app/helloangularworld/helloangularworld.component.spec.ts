import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloangularworldComponent } from './helloangularworld.component';

describe('HelloangularworldComponent', () => {
  let component: HelloangularworldComponent;
  let fixture: ComponentFixture<HelloangularworldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloangularworldComponent]
    });
    fixture = TestBed.createComponent(HelloangularworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
