export const breakAction = (store: any) => {
    store.setState({
        stepStatus: 'PENDING',
        canGoNextStep: false,
    });
};

export default breakAction;
