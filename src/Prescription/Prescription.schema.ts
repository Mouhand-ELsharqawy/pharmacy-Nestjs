import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class PrescriptionClass extends Document{
    @Prop({ required: true })
    ssn:string;
    @Prop({ required: true })
    presp:string;
    @Prop({ required: true })
    docid:string;
}

export const PrescriptionSchema = SchemaFactory.createForClass(PrescriptionClass);