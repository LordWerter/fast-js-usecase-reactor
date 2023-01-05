import React from 'react';

import { TComponentProps } from '../definitions/component';

export type TProps = TComponentProps & {};

export const Runner: React.FC<TProps> = (props): JSX.Element => {
    const {children} = props;
    return (
        <>
            <h2>Hello! I'm The Runner Man. What's up, noob?</h2>
            {children}
        </>
    );
};

export default Runner;
