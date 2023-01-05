import React, {
  createContext,
  FC,
  HTMLAttributes,
  ReactChild,
} from 'react';

import { createStore } from '../Store';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

export const ProviderContext = createContext({});

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Provider: FC<Props> = ({ children }) => {
    const store = createStore({});
    const api = {
        getState: store.getState,
        setState: store.setState,
    }



    return <ProviderContext.Provider value={api}>{children}</ProviderContext.Provider>;;
};
 export default Provider;