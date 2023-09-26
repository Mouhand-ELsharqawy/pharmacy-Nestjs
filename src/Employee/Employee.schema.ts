import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { OrderClass } from "src/Order/Order.schema";

@Schema()
export class EmployeeClass extends Document{
    @Prop({ required: true })
    fname:string;
    @Prop({ required: true })
    lname:string;
    @Prop({ required: true })
    dob:string;
    @Prop({ required: true })
    salary:number;
    @Prop({ required: true })
    startdate:string;
    @Prop({ required: true })
    enddate:string;
    @Prop({ required: true })
    role:string;
    @Prop({ required: true })
    liscense:string;
    @Prop({ required: true })
    ssn:string;
    @Prop({ required: true })
    phone:string;
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: OrderClass.name })
    order:string;
}

export const EmployeeSchema = SchemaFactory.createForClass(EmployeeClass);