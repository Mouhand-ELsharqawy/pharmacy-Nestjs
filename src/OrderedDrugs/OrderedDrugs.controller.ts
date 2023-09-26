import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { OrderedDrugService } from "./OrderedDrugs.service";
import { OrderedDrugs } from "./OrderedDrugs.interface";
import { OrderedDrugCreatedto } from "./OrderedDrugsCreatedto.dto";
import { OrderedDrugUpdatedto } from "./OrderedDrugsUpdatedto.dto";

@Controller("ordereddrug")
export class OrderedDrugController{
    constructor(
        private readonly ordereddrugservice:OrderedDrugService
    ){}

    @Get()
    getall():Promise<OrderedDrugs[]>{
        return this.ordereddrugservice.getall();
    }

    @Post()
    create(@Body(ValidationPipe) orderedcreatedto:OrderedDrugCreatedto):Promise<OrderedDrugs>{
        return this.ordereddrugservice.create(orderedcreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<OrderedDrugs>{
        return this.ordereddrugservice.getone(id)
    }

    @Patch(":id")
    update(@Param("id") id:string,@Body(
        ValidationPipe
        ) orderedupdatedto:OrderedDrugUpdatedto):Promise<OrderedDrugs>{
        return this.ordereddrugservice.update(id,orderedupdatedto);
    }

    @Delete(":id")
    delete(@Param("id") id:string):Promise<OrderedDrugs>{
        return this.ordereddrugservice.delete(id);
    }
}