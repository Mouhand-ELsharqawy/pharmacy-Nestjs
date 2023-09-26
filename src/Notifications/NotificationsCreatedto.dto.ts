import { IsString } from "class-validator";

export class NotificationCreatedto{
    @IsString()
    readonly type:string;
    @IsString()
    readonly message:string;
    @IsString()
    readonly employee:string;
}