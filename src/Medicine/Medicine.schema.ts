import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { OrderedDrugClass } from "src/OrderedDrugs/OrderedDrugs.schema";

@Schema()
export class MedicineClass extends Document{
    @Prop({ required:true })
    medtype:string;
    @Prop({ required:true })
    manufacturer:string;
    @Prop({ required:true })
    stockgty:string;
    @Prop({ required:true })
    price:number;
    @Prop({ required:true })
    expiredate:string;
    @Prop({ required:true })
    desc:string;
    @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: OrderedDrugClass.name })
    ordereddrug:string;
}

export const MedicineSchema = SchemaFactory.createForClass(MedicineClass);