import { IsString } from "class-validator";

export class CustomerCreatedto{
    @IsString()
    readonly fname:string;
    @IsString()
    readonly lname:string;
    @IsString()
    readonly phone:string;
    @IsString()
    readonly gender:string;
    @IsString()
    readonly address:string;
    @IsString()
    readonly ssn:string;
    @IsString()
    readonly dob:string;
    @IsString()
    readonly insurance:string;
}