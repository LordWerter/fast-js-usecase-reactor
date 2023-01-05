import { TRouteResult } from '../../definitions/action';

export const runRouting = (routeParams: any) => {
    const { processRoute, path } = routeParams;
    const result: Promise<TRouteResult> = processRoute(path);
    return result;
};

export default runRouting;
