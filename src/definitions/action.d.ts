export type TActionType = 'BASIC' | 'REDIRECT' | 'ROUTE';

export type TActionDescriptor = {
    type: TActionType;
    name: string;
    inputData?: any;
    process: () => Promise<unknown>;
}

export type TRequiredResultProps = {
    PIPELINE_ID: string;
    JOB_ID: string;
    ACTION_ID: string;
    status: 'SUCCESS' | 'FAILURE' | 'ERROR';
};

export type TResultData = TRequiredResultProps & TRandomObject;

export type TSemanticDomainProps = {
    type: string;
    name: string;
    mode: string;
}

export type TNoticeDescriptor = {
    noticeType: string;
    view?: TSemanticDomainProps;
    module: TSemanticDomainProps;
    action: TSemanticDomainProps;
    timestamp: string;
};

export type TFailure = TRequiredResultProps & {
    canRetry?: boolean;
    noticeDescriptor: TNoticeDescriptor;
    mustBreakPipeline?: boolean;
};

export type TError = TRequiredResultProps & {
    reasonCode: string;
};

export type TBasicActionResult = TRequiredResultProps & {
    data?: TRandomObject | TFail | TError;

};

export type TRedirectResult = TRequiredResultProps & {
    data?: TRandomObject | TFail | TError;
};

export type TRouteResult = TRequiredResultProps & {

};