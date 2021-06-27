import { atom, selector } from 'recoil';
import { fetchNui } from '../../../utils/fetchNui';
import { ServerResponsePromise } from '../../../types/nui';
import { FlagProps } from '../../../types/spawn';

export const spawnState = {
  flags: atom({
    key: 'spawnFlags',
    default: selector({
      key: 'spawnFlagsDefault',
      get: async () => {
        // FIXME: More error handling
        const resp = await fetchNui<ServerResponsePromise<FlagProps[]>>('getflagsorsomeevnt');
        return resp.data;
      },
    }),
  }),
};
