import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { BillService } from "./Bill.service";
import { Bill } from "./Bill.interface";
import { BillCreatedto } from "./BillCreatedto.dto";
import { BillUpdatedto } from "./BillUpdatedto.dto";

@Controller("bill")
export class BillController{
    constructor(
        private readonly billservice:BillService
    ){}


    @Get()
    getall():Promise<Bill[]>{
        return this.billservice.getall();
    }

    @Post()
    create(@Body(ValidationPipe) billcreatedto:BillCreatedto):Promise<Bill>{
        return this.billservice.create(billcreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<Bill>{
        return this.billservice.getone(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) billupdatedto:BillUpdatedto):Promise<Bill>{
        return this.billservice.update(id,billupdatedto);
    }

    @Delete(":id")
    delete(@Param("id") id:string):Promise<Bill>{
        return this.billservice.delete(id);
    }
}