import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaChart2Component } from './AreaChartHasColorPalette.component';
describe('AreaChart2Component', () => {
  let component: AreaChart2Component;
  let fixture: ComponentFixture<AreaChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
