import { IsString } from "class-validator";

export class PrescriptionDrugCreatedto{
    @IsString()
    readonly drugname:string;
    @IsString()
    readonly refilllimit:string;
    @IsString()
    readonly prescription:string;
}