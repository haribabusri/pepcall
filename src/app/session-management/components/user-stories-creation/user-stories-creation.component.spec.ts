import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoriesCreationComponent } from './user-stories-creation.component';

describe('UserStoriesCreationComponent', () => {
  let component: UserStoriesCreationComponent;
  let fixture: ComponentFixture<UserStoriesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStoriesCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoriesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
