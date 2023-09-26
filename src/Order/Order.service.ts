import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { OrderClass } from "./Order.schema";
import { Model } from "mongoose";
import { Order } from "./Order.interface";
import { OrderCreatedto } from "./OrderCreatedto.dto";
import { OrderUpdatedto } from "./OrderUpdatedto.dto";

@Injectable()
export class OrderService{
    constructor(
        @InjectModel(OrderClass.name)
        private readonly ordermodel:Model<OrderClass>
    ){}

    async getall():Promise<Order[]>{
        return await this.ordermodel.find().exec();
    }

    async create(ordercreatedto:OrderCreatedto):Promise<Order>{
        try{
            return await this.ordermodel.create(ordercreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<Order>{
        try{
            return await this.ordermodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, orderupdatedto:OrderUpdatedto):Promise<Order>{
        try{
            return await this.ordermodel.findByIdAndUpdate(id,orderupdatedto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<Order>{
        try{
            return await this.ordermodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}