export const runPipeline = (store: any) => {
    store.setState({
        jobStatus: 'PENDING',
        canGoNextStep: false,
    });
    
};

export default runPipeline;