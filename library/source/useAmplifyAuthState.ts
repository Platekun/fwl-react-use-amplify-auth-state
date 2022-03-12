import { Hub } from '@aws-amplify/core';
import type { HubCallback } from '@aws-amplify/core';
import useOnce from '@future-widget-lab/react-use-once';

function useAmplifyAuthState(callback: HubCallback) {
  useOnce(() => {
    Hub.listen('auth', callback);
  });
}

export default useAmplifyAuthState;
