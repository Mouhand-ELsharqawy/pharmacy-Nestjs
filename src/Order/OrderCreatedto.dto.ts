import { IsString } from "class-validator";

export class OrderCreatedto{
    @IsString()
    readonly orderdate:string;
    @IsString()
    readonly prescription:string;
}