import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { NotificationService } from "./Notifications.service";
import { Notification } from "./Notifications.interface";
import { NotificationCreatedto } from "./NotificationsCreatedto.dto";
import { NotificationUpdatedto } from "./NotificationsUpdatedto.dto";

@Controller("notification")
export class NotificationController{
    constructor(
        private readonly notificationservice:NotificationService
    ){}

    @Get()
    getall():Promise<Notification[]>{
        return this.notificationservice.getall();
    }

    @Post()
    create(@Body(
        ValidationPipe
        ) notificationcreatedto:NotificationCreatedto):Promise<Notification>{
            return this.notificationservice.create(notificationcreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<Notification>{
        return this.notificationservice.getone(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) notificationupdatedto:NotificationUpdatedto):Promise<Notification>{
            return this.notificationservice.update(id,notificationupdatedto);
    }

    @Delete(":id")
    delete(@Param("id") id:string):Promise<Notification>{
        return this.notificationservice.delete(id);
    }
}