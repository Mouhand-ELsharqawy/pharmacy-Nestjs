import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { InsuranceService } from "./Insurance.service";
import { Insurance } from "./Insurance.interface";
import { InsuranceCreatedto } from "./InsuranceCreatedto.dto";
import { InsuranceUpdatedto } from "./InsuranceUpdatedto.dto";

@Controller("insurance")
export class InsuranceController{
    constructor(
        private readonly insuranceservice:InsuranceService
    ){}

    @Get()
    getall():Promise<Insurance[]>{
        return this.insuranceservice.getall();
    }

    @Post()
    create( @Body(ValidationPipe) insurancecreatedto:InsuranceCreatedto ):Promise<Insurance>{
        return this.insuranceservice.create(insurancecreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string): Promise<Insurance>{
        return this.insuranceservice.getone(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) insuranceupdatedto:InsuranceUpdatedto):Promise<Insurance>{
        return this.insuranceservice.update(id,insuranceupdatedto)
    }

    @Delete(":id")
    delete(@Param("id") id:string):Promise<Insurance>{
        return this.insuranceservice.delete(id);
    }
}