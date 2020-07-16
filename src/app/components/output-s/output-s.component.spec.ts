import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputSComponent } from './output-s.component';

describe('OutputSComponent', () => {
  let component: OutputSComponent;
  let fixture: ComponentFixture<OutputSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
