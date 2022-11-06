import { SquarePipe } from './square.pipe';

describe('SquarePipe', () => {
  let pipe:SquarePipe;
  beforeEach(() => {
    pipe = new SquarePipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('check returned value is correct or not',() => {
    expect(pipe.transform(10)).toBe(100);
  })
  it('checking for invalid pipe values',() => {
    expect(pipe.transform('dsk')).toBe(NaN);
  })
});
