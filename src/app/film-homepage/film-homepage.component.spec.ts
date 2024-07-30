import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmHomepageComponent } from './film-homepage.component';

describe('FilmHomepageComponent', () => {
  let component: FilmHomepageComponent;
  let fixture: ComponentFixture<FilmHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
