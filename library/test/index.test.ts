// 💡 https://jestjs.io/docs/api
import { describe, expect, it } from '@jest/globals';
import useAmplifyAuthstate from '../source';

describe('useAmplifyAuthstate', () => {
  it('should exist.', () => {
    expect(useAmplifyAuthstate).not.toBeUndefined();
  });
});
