export const breakPipeline = (setStateFn:(mutation: any) => Promise<any>) => {
    const resetTpl = {
        pipelineId: null,
        jobIdSeq: [],
        seqPointer: 0,
        jobId: null,
        jobStatus: 'IDLE',
        canRunNextJob: false,
    };
    return () => setStateFn(resetTpl).then(() => {
        return {
            stepStatus: 'BREAK',
        };
    });
}

export default breakPipeline;
