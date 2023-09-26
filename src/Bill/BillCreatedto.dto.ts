import { IsString, IsNumber } from "class-validator";

export class BillCreatedto{
    @IsString()
    readonly ssn:string;
    @IsNumber()
    readonly insrpay:number;
    @IsNumber()
    readonly custpay:number;
    @IsNumber()
    readonly totalamount:number;
    @IsString()
    readonly customer:string;
}