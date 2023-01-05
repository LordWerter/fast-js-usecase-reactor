import { TActionDescriptor } from '../../definitions/action';
import runBasicAction from './runBasic';
import runRedirect from './runRedirect';
import runRouting from './runRouting';

export const runAction = (store: any, action: TActionDescriptor) => {
    const runFnMap = {
        BASIC: runBasicAction,
        REDIRECT: runRedirect,
        ROUTE: runRouting,
    };
    const {type, name, process} = action;
    const runFn = runFnMap[type];
    store.setState({
        jobId: name,
        jobStatus: 'STARTED',
        canStartNextJob: false,
    });
    runFn(store);
};

export default runAction;
