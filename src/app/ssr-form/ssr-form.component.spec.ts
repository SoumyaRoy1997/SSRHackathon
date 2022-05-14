import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrFormComponent } from './ssr-form.component';

describe('SsrFormComponent', () => {
  let component: SsrFormComponent;
  let fixture: ComponentFixture<SsrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
