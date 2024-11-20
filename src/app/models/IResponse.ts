import {IResult} from "@/app/models/IResult";

export interface IResponse {
    page: number,
    results: IResult[],
    total_pages: number,
    total_results: number
}