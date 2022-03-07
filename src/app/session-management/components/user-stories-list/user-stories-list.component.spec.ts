import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoriesListComponent } from './user-stories-list.component';

describe('UserStoriesListComponent', () => {
  let component: UserStoriesListComponent;
  let fixture: ComponentFixture<UserStoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
