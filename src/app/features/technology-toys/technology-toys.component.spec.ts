import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyToysComponent } from './technology-toys.component';

describe('TechnologyToysComponent', () => {
  let component: TechnologyToysComponent;
  let fixture: ComponentFixture<TechnologyToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
