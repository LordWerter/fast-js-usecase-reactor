import runAction from '../action/run';

export const runJob = (store: any) => {
    store.setState({
        stepStatus: 'PENDING',
        canGoNextStep: false,
    });
    const result = runAction(store, 'runJob');

    return result;
};

export default runJob;
