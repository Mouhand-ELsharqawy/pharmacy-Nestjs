import { IsString, IsNumber } from "class-validator";

export class OrderedDrugCreatedto{
    @IsString()
    readonly orderqty:string;
    @IsString()
    readonly batchno:string;
    @IsNumber()
    readonly price:number;
    @IsString()
    readonly order:string;
}