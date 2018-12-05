import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MazeTv} from '../MazeTv/app.MazeTv';

describe('MazeTv', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MazeTv
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MazeTv);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TvMazeapp'`, () => {
    const fixture = TestBed.createComponent(MazeTv);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TvMazeapp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MazeTv);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to TvMazeapp!');
  });
});
