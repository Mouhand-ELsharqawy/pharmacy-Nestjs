import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { OrderService } from "./Order.service";
import { Order } from "./Order.interface";
import { OrderCreatedto } from "./OrderCreatedto.dto";
import { OrderUpdatedto } from "./OrderUpdatedto.dto";

@Controller("orders")
export class OrderController{
    constructor(
        private readonly orderservice:OrderService
    ){}
    
    @Get()
    getall():Promise<Order[]>{
        return this.orderservice.getall();
    }

    @Post()
    create(@Body(ValidationPipe) ordercreatedto:OrderCreatedto):Promise<Order>{
        return this.orderservice.create(ordercreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<Order>{
        return this.orderservice.getone(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) orderupdatedto:OrderUpdatedto):Promise<Order>{
        return this.orderservice.update(id,orderupdatedto);
    }

    @Delete(":id")
    remove(@Param("id") id:string):Promise<Order>{
        return this.orderservice.delete(id);
    }

}