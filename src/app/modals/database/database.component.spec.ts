import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDialog } from './database.component';

describe('DatabasesDialog', () => {
  let component: DatabaseDialog;
  let fixture: ComponentFixture<DatabaseDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
