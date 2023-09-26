import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { NotificationClass } from "./Notifications.schema";
import { Model } from "mongoose";
import { Notification } from "./Notifications.interface";
import { NotificationCreatedto } from "./NotificationsCreatedto.dto";
import { NotificationUpdatedto } from "./NotificationsUpdatedto.dto";

@Injectable()
export class NotificationService{
    constructor(
        @InjectModel(NotificationClass.name)
        private readonly notificationmodel:Model<NotificationClass>
    ){}

    async getall():Promise<Notification[]>{
        return await this.notificationmodel.find().exec()
    }

    async create(notificationcreatedto:NotificationCreatedto):Promise<Notification>{
        try{
            return await this.notificationmodel.create(notificationcreatedto)
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<Notification>{
        try{
            return await this.notificationmodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, notificationupdatedto:NotificationUpdatedto):Promise<Notification>{
        try{
            return await this.notificationmodel.findByIdAndUpdate(id,notificationupdatedto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<Notification>{
        try{
            return await this.notificationmodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}