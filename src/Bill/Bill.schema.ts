import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { CustomerClass } from "src/Customer/Customer.schema";

@Schema()
export class BillClass extends Document{
    @Prop({ required:true })
    ssn:string;
    @Prop({ required:true })
    insrpay:number;
    @Prop({ required:true })
    custpay:number;
    @Prop({ required:true })
    totalamount:number;
    @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: CustomerClass.name })
    customer:string;

}

export const BillSchema = SchemaFactory.createForClass(BillClass);