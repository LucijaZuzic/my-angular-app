import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchFirstNameComponent } from './user-search-first-name.component';

describe('UserSearchFirstNameComponent', () => {
  let component: UserSearchFirstNameComponent;
  let fixture: ComponentFixture<UserSearchFirstNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchFirstNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
