import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchEmailComponent } from './user-search-email.component';

describe('UserSearchEmailComponent', () => {
  let component: UserSearchEmailComponent;
  let fixture: ComponentFixture<UserSearchEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
