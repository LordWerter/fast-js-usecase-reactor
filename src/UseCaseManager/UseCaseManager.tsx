import React from 'react';

import { TComponentProps } from '../definitions/component';
import Provider from '../Provider';
import Runner from '../Runner';

export type TProps = TComponentProps & {};

export const UseCaseManager: React.FC<TProps> = (props): JSX.Element => {
    const {children} = props;

    return (
        <Provider>
            <Runner>
                <h1>Hello! I'm UseCaseManager. What's up, bro?</h1>
                {children}
            </Runner>
        </Provider>
    );
};

export default UseCaseManager;
