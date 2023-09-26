import { IsString } from "class-validator";

export class PrescriptionCreatedto{
    @IsString()
    readonly ssn:string;
    @IsString()
    readonly presp:string;
    @IsString()
    readonly docid:string;
}