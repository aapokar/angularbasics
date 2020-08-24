import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IocontainerComponent } from './iocontainer.component';

describe('IocontainerComponent', () => {
  let component: IocontainerComponent;
  let fixture: ComponentFixture<IocontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IocontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
