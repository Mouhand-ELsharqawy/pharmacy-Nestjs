import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { OrderClass } from "src/Order/Order.schema";

@Schema()
export class OrderedDrugClass extends Document{
    @Prop({ required:true })
    orderqty:string;
    @Prop({ required:true })
    batchno:string;
    @Prop({ required:true })
    price:number;
    @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: OrderClass.name })
    order:string;
}

export const OrderedDrugSchema = SchemaFactory.createForClass(OrderedDrugClass);