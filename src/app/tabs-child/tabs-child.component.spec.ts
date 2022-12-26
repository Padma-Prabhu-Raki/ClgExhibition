import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsChildComponent } from './tabs-child.component';

describe('TabsChildComponent', () => {
  let component: TabsChildComponent;
  let fixture: ComponentFixture<TabsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
