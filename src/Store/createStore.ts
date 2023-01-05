import {
  IStore,
  IStoreParams,
} from '../definitions/store';

export class Store {
    public state: IStore = {
        status: 'IDLE',
        pipelineId: null,
        jobsSeq: [],
        seqPointer: 0,
        jobId: null,
        jobStatus: 'IDLE',
        canRunNextJob: false,
    };

    private params: IStoreParams | null = null;

    constructor(params: IStoreParams) {
        // @ts-ignore
        this.params = { ...params };
    }

    public getState = () => {
        return this.state;
    }

    public getStateItem = (name: string) => {
        // @ts-ignore
        return this.state[name] ? this.state[name] : null;
    }

    public setState = (mutation: any) => {
        Object.keys(this.state).map((key: string) => {
            // @ts-ignore
            if (mutation[key]) {
                // @ts-ignore
                if (Array.isArray(this.state[key]) && Array.isArray(mutation[key])) {
                    // @ts-ignore
                    this.state[key] = [...mutation[key]];
                // @ts-ignore
                } else if (typeof this.state[key] === 'object' && typeof mutation[key] === 'object') {
                    // @ts-ignore
                    this.state[key] = { ...mutation[key] };
                } else {
                    // @ts-ignore
                    this.state[key] = mutation[key];
                }
            } else {
                console.warn('this.state[key] && mutation[key] had exception');
            }
        });
    }

    public onBeforeSetState = (state: IStore) => {
        return this?.params?.onBeforeSetState ? this.params.onBeforeSetState(state) : null;
    };

    public onAfterSetState = (state: IStore) => {
        return this?.params?.onAfterSetState ? this.params.onAfterSetState(state) : null;
    };
}

export const createStore = (params: IStoreParams) => {  return new Store(params); };
export default createStore;