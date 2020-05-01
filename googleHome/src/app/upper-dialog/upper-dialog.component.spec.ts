import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperDialogComponent } from './upper-dialog.component';

describe('UpperDialogComponent', () => {
  let component: UpperDialogComponent;
  let fixture: ComponentFixture<UpperDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
