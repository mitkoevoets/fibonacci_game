export const persistState = (storageKey: string, state: object): void => {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
};

export const getIntialState = (storageKey: string): any => {
  const savedState = window.localStorage.getItem(storageKey);
  try {
    if (!savedState) {
      return undefined;
    }
    return JSON.parse(savedState ?? '{}');
  } catch (e) {
    console.error('Error loading state : ' + storageKey);
    return undefined;
  }
};
