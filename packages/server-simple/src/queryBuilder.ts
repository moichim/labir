import { ApiEverythingResponse, ApiFolderContentResponse, ApiInfoResponse, ApiTimeGroupResponse } from "./index";


export enum ApiTimeGrouping {
    HOURS = "hours",
    DAYS = "days",
    WEEKS = "weeks",
    MONTHS = "months",
    YEARS = "years"
}

/**
 * Construct and perform a request to the API endpoint
 */
export class QueryBuilder {

    protected readonly url: URL;
    protected readonly query: URLSearchParams;

    public constructor(
        public readonly api_endpoint: string,
        public readonly subfolder?: string
    ) {
        this.url = new URL( this.api_endpoint );
        this.query = this.url.searchParams;

        if ( this.subfolder !== undefined ) {
            this.query.set( "scope", this.subfolder );
        }

    }


    public setOnly(
        only: string
    ): QueryBuilder {
        this.query.set( "only", only );
        return this;
    }


    public setExclude(
        exclude: string
    ): QueryBuilder {
        this.query.set( "exclude", exclude );
        return this;
    }

    public setGrid(
        grid: boolean
    ) {
        if (grid === true ) {
            this.query.set("grid", "true");
        } else {
            this.query.delete("grid");
        }
    }


    public async info(): Promise<ApiInfoResponse> {
        return this.fetch<ApiInfoResponse>();
    }

    public async folder(
        folderName: string
    ): Promise<ApiFolderContentResponse> {
        this.query.set( "folder", folderName );
        return this.fetch<ApiFolderContentResponse>();
    }

    public async everything(): Promise<ApiEverythingResponse> {
        this.query.set("everything", "true");
        return this.fetch<ApiEverythingResponse>();
    }

    public async hours(): Promise<ApiTimeGroupResponse> {
        this.query.set( "hours", "true" );
        return this.fetch<ApiTimeGroupResponse>();
    }

    public async days(): Promise<ApiTimeGroupResponse> {
        this.query.set( "days", "true" );
        return this.fetch<ApiTimeGroupResponse>();
    }

    public async weeks(): Promise<ApiTimeGroupResponse> {
        this.query.set( "weeks", "true" );
        return this.fetch<ApiTimeGroupResponse>();
    }

    public async months(): Promise<ApiTimeGroupResponse> {
        this.query.set( "months", "true" );
        return this.fetch<ApiTimeGroupResponse>();
    }

    public async years(): Promise<ApiTimeGroupResponse> {
        this.query.set( "years", "true" );
        return this.fetch<ApiTimeGroupResponse>();
    }


    public async grid(
        by: ApiTimeGrouping
    ): Promise<ApiTimeGroupResponse> {

        switch(by) {

            case ApiTimeGrouping.HOURS:
                return await this.hours();
            case ApiTimeGrouping.DAYS:
                return await this.days();
            case ApiTimeGrouping.WEEKS:
                return await this.days();
            case ApiTimeGrouping.MONTHS:
                return await this.months();
            case ApiTimeGrouping.YEARS:
                return await this.years();
            default:
                return await this.hours();

        }

    }


    /** 
     * The main method that performs the fetch internally 
     */
    protected async fetch<T>(): Promise<T> {
        const response = await fetch( this.url );
        const json = await response.json() as T;
        return json;
    }

    public get object() {
        return this.url;
    }



}