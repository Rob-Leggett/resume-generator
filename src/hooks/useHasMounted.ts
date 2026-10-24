import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/** Returns false during SSR and hydration, true once rendering on the client. */
export function useHasMounted(): boolean {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
