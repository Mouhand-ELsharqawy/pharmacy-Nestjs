import { IsString } from "class-validator"

export class DisposalCreatedto{
    @IsString()
    readonly dispqty:string;
    @IsString()
    readonly company:string;
    @IsString()
    readonly dispdate:string;
    @IsString()
    readonly medicine:string;
    @IsString()
    readonly employee:string;
}