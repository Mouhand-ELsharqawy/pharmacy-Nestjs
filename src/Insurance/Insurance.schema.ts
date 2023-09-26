import { Schema, SchemaFactory,Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class InsuranceClass extends Document{
    @Prop({ required:true })
    compname:string;
    @Prop({ required:true })
    coinsurance:string;
    @Prop({ required:true })
    startdate:string;
    @Prop({ required:true })
    enddate:string;
}

export const InsuranceSchema = SchemaFactory.createForClass(InsuranceClass);