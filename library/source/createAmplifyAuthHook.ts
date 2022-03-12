import { Hub } from '@aws-amplify/core';
import type { HubCallback } from '@aws-amplify/core';
import useOnce from '@future-widget-lab/react-use-once';

function createAmplifyAuthHook(authEventType: 'signIn' | 'signUp' | 'signOut' | 'signIn_failure' | 'configured') {
  return function useAmplifyAuthState(callback: HubCallback) {
    useOnce(() => {
      Hub.listen('auth', (capsule) => {
        switch (capsule.payload.event) {
          case authEventType: {
            callback(capsule);
            break;
          }
        }
      });
    });
  };
}

export default createAmplifyAuthHook;
