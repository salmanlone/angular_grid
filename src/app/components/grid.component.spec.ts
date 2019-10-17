import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        GridComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'grid'`, () => {
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('grid');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GridComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('grid app is running!');
  });
});
