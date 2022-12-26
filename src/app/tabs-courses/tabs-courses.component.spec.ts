import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCoursesComponent } from './tabs-courses.component';

describe('TabsCoursesComponent', () => {
  let component: TabsCoursesComponent;
  let fixture: ComponentFixture<TabsCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
