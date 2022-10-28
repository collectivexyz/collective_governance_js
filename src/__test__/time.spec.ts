import { timeNow } from '../time';

describe('timeNow', () => {
  it('must return a positive timestamp in seconds', () => {
    const timeValue = timeNow();
    expect(timeValue).toBeGreaterThanOrEqual(1666885360);
  });
});
