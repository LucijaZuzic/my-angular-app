import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchLastNameComponent } from './user-search-last-name.component';

describe('UserSearchLastNameComponent', () => {
  let component: UserSearchLastNameComponent;
  let fixture: ComponentFixture<UserSearchLastNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchLastNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchLastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
