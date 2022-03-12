// 💡 https://jestjs.io/docs/api
import { describe, expect, it } from '@jest/globals';
import {
  useAmplifyAuthState,
  useOnAmplifyConfigured,
  useOnAmplifySignIn,
  useOnAmplifySignInFailure,
  useOnAmplifySignOut,
  useOnAmplifySignUp,
} from '../source';

describe('useAmplifyAuthstate', () => {
  it('should exist.', () => {
    expect(useAmplifyAuthState).not.toBeUndefined();
  });

  it('should exist.', () => {
    expect(useOnAmplifyConfigured).not.toBeUndefined();
  });

  it('should exist.', () => {
    expect(useOnAmplifySignIn).not.toBeUndefined();
  });

  it('should exist.', () => {
    expect(useOnAmplifySignInFailure).not.toBeUndefined();
  });

  it('should exist.', () => {
    expect(useOnAmplifySignOut).not.toBeUndefined();
  });

  it('should exist.', () => {
    expect(useOnAmplifySignUp).not.toBeUndefined();
  });
});
