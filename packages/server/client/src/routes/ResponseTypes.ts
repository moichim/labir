export type ApiResponseDataType = {}

/**
 * The response of LabIR server to any request.
 */
export type ApiResponseType<R extends ApiResponseDataType = ApiResponseDataType> =
    {
        message: string,
        code: number,
        colophoon: {
            time: number,
            version: string,
            path: string | null,
            action: string
        },
        raw: {
            request: Request,
            response: Response
        }
    }
    & (
        {
            success: true,
            data: R,
        }
        | {
            success: false,
            data: undefined
        }
    )