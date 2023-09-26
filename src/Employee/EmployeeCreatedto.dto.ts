import { IsString, IsNumber } from "class-validator";

export class EmployeeCreatedto{
    @IsString()
    readonly fname:string;
    @IsString()
    readonly lname:string;
    @IsString()
    readonly dob:string;
    @IsNumber()
    readonly salary:number;
    @IsString()
    readonly startdate:string;
    @IsString()
    readonly enddate:string;
    @IsString()
    readonly role:string;
    @IsString()
    readonly liscense:string;
    @IsString()
    readonly ssn:string;
    @IsString()
    readonly phone:string;
    @IsString()
    readonly order:string;
}