import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { DisposalService } from "./Disposal.service";
import { Disposal } from "./Disposal.interface";
import { DisposalCreatedto } from "./DisposalCreatedto.dto";
import { DisposalUpdatedto } from "./DisposalUpdatedto.dto";

@Controller("disposal")
export class DisposalController{
    constructor(
        private readonly disposalservice:DisposalService
    ){}

    @Get()
    getall():Promise<Disposal[]>{
        return this.disposalservice.getall()
    }

    @Post()
    create(@Body(ValidationPipe) disposalcreatedto:DisposalCreatedto):Promise<Disposal>{
        return this.disposalservice.create(disposalcreatedto)
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<Disposal>{
        return this.disposalservice.getone(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) disposalupdatedto:DisposalUpdatedto):Promise<Disposal>{
        return this.disposalservice.update(id,disposalupdatedto);
    }

    @Delete(":id")
    delete(@Param("id") id:string):Promise<Disposal>{
        return this.disposalservice.delete(id);
    }
}