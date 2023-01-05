export type TStatus = 'IDLE' | 'STARTED' | 'PENDING' | 'SUCCESS' | 'FAILED' | 'ERROR' | 'CANCELED';
export type TJobDescriptor = {
    type?: string;
    name: string;
    callback?: (...params: any) => void;
};

export interface IStore {
    status: TStatus;
    pipelineId: null | string;
    jobsSeq: TJobDescriptor[];
    seqPointer: number;
    jobId: null | string;
    jobStatus: TStatus;
    canRunNextJob: boolean;
}

export interface IStoreParams {
    onBeforeSetState?: (state: IStoreState) => void;
    onAfterSetState?: (state: IStoreState) => void;
};
