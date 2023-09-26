import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema()
export class NotificationClass extends Document{
    @Prop({ required:true })
    type:string;
    @Prop({ required:true })
    message:string;
    @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: NotificationClass.name })
    employee:string;
}

export const NotificationSchema = SchemaFactory.createForClass(NotificationClass);