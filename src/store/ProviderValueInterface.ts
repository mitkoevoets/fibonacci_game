import { AppActions } from './AppActions';
import { RootState } from './rootState';

export interface ProviderValueInterface {
  state: RootState;
  dispatch(action: AppActions): void;
}
