import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { PrescriptionClass } from "src/Prescription/Prescription.schema";

@Schema()
export class PrescriptionDrugClass extends Document{
    @Prop({ required:true })
    drugname:string;
    @Prop({ required:true })
    refilllimit:string;
    @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: PrescriptionClass.name })
    prescription:string;
}

export const PrescriptionDrugSchema = SchemaFactory.createForClass(PrescriptionDrugClass);