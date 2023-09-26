import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { PrescriptionClass } from "src/Prescription/Prescription.schema";

@Schema()
export class OrderClass extends Document{
    @Prop({ required:true })
    orderdate:string;
    @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: PrescriptionClass.name })
    prescription:string;
}

export const OrderSchema = SchemaFactory.createForClass(OrderClass);