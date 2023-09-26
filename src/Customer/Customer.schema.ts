import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema()
export class CustomerClass extends Document{
    @Prop({ required:true })
    fname:string;
    @Prop({ required:true })
     lname:string;
     @Prop({ required:true })
     phone:string;
     @Prop({ required:true })
     gender:string;
     @Prop({ required:true })
     address:string;
     @Prop({ required:true })
     ssn:string;
     @Prop({ required:true })
     dob:string;
     @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: CustomerClass.name })
     insurance:string;
}

export const CustomerSchema = SchemaFactory.createForClass(CustomerClass);