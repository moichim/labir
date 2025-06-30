type ApiResponseBase = {
    colophoon: {
        time: number,
        version: string,
        path: string | null,
        action: string
    },
    response: Response,
    request: Request
}

export type ApiResponseDataType = {}

export type ApiResponseSuccess<R extends ApiResponseDataType = ApiResponseDataType> = ApiResponseBase & {
    success: true,
    data: R
}

export type ApiResponseError = ApiResponseBase &{
    success: false,
    error: string,
    code: number,
}



export type ApiResponseType<R extends ApiResponseDataType> 
    = ApiResponseSuccess<R>
    | ApiResponseError;