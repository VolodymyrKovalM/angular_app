import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubpreloaderComponent } from './githubpreloader.component';

describe('GithubpreloaderComponent', () => {
  let component: GithubpreloaderComponent;
  let fixture: ComponentFixture<GithubpreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubpreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubpreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
