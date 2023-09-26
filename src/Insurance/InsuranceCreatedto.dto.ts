import { IsString } from "class-validator";

export class InsuranceCreatedto{
    @IsString()
    readonly compname:string;
    @IsString()
    readonly coinsurance:string;
    @IsString()
    readonly startdate:string;
    @IsString()
    readonly enddate:string;
}