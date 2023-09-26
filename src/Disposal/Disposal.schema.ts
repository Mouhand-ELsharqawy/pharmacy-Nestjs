import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { EmployeeClass } from "src/Employee/Employee.schema";

@Schema()
export class DisposalClass extends Document{
    @Prop({ required:true })
    dispqty:string;
    @Prop({ required:true })
     company:string;
     @Prop({ required:true })
     dispdate:string;
     @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: EmployeeClass.name })
     medicine:string;
     @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: EmployeeClass.name })
     employee:string;
}

export const DisposalSchema = SchemaFactory.createForClass(DisposalClass);