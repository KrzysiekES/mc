import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyItemComponent } from './technology-item.component';

describe('TechnologyItemComponent', () => {
  let component: TechnologyItemComponent;
  let fixture: ComponentFixture<TechnologyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
