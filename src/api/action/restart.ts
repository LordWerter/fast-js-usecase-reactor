export const restartAction = (store: any) => {
    store.setState({
        stepStatus: 'PENDING',
        canGoNextStep: false,
    });
};

export default restartAction;
