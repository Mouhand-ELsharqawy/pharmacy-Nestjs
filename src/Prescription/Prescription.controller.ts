import { Controller,Get,Post,Param,Body,Patch,Delete, ValidationPipe } from "@nestjs/common";
import { Prescription } from "./Prescription.interface";
import { PrescriptionService } from "./Prescription.service";
import { PrescriptionCreatedto } from "./PrescriptionCreatedto.dto";
import { PrescriptionUpdatedto } from "./PrescriptionUpdatedto.dto";

@Controller("prescription")
export class PrescriptionController{
    constructor(
        private readonly Prescriptionservice:PrescriptionService
    ){}

    @Get()
    getall():Promise<Prescription[]>{
        return this.Prescriptionservice.getall();
    }

    @Post()
    create(@Body(
        ValidationPipe
        ) prescriptioncreatedto:PrescriptionCreatedto){
        return this.Prescriptionservice.create(prescriptioncreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<Prescription>{
        return this.Prescriptionservice.getone(id)
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) prescriptionupdatedto:PrescriptionUpdatedto):Promise<Prescription>{
            return this.Prescriptionservice.update(id,prescriptionupdatedto);
        }
    @Delete(":id")
    delete(@Param("id") id:string):Promise<Prescription>{
        return this.Prescriptionservice.delete(id);
    }

}