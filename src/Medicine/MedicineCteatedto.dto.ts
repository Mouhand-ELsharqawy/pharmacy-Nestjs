import { IsString, IsNumber } from "class-validator";

export class MedicineCreatedto{
    @IsString()
    readonly medtype:string;
    @IsString()
    readonly manufacturer:string;
    @IsString()
    readonly stockgty:string;
    @IsNumber()
    readonly price:number;
    @IsString()
    readonly expiredate:string;
    @IsString()
    readonly desc:string;
    @IsString()
    readonly ordereddrug:string;
}