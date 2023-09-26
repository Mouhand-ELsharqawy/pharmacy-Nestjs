import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NotificationClass, NotificationSchema } from "./Notifications.schema";
import { NotificationController } from "./Notifications.controller";
import { NotificationService } from "./Notifications.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: NotificationClass.name,
                schema: NotificationSchema
            }
        ])
    ],
    controllers: [ NotificationController ],
    providers: [ NotificationService ]
})
export class NotificationModule{}