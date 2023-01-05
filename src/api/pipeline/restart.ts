export const restartPipeline = (store: any) => {
    store.setState({
        stepStatus: 'PENDING',
        canGoNextStep: false,
    });
};

export default restartPipeline;