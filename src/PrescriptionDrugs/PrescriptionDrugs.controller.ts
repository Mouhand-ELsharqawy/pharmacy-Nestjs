import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { PrescriptionDrugService } from "./PrescriptionDrugs.service";
import { PrescriptionDrugs } from "./PrescriptionDrugs.interface";
import { PrescriptionDrugCreatedto } from "./PrescriptionDrugsCreatedto.dto";
import { PrescriptionDrugUpdatedto } from "./PrescriptionDrugsUpdatedto.dto";

@Controller("prescriptiondrug")
export class PrescriptionDrugController{
    constructor(
        private readonly prescriptiondrugservice:PrescriptionDrugService
    ){}

    @Get()
    getall():Promise<PrescriptionDrugs[]>{
        return this.prescriptiondrugservice.getall()
    }

    @Post()
    create(@Body(
        ValidationPipe
        ) presdrugcreatedto:PrescriptionDrugCreatedto):Promise<PrescriptionDrugs>{
            return this.prescriptiondrugservice.create(presdrugcreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<PrescriptionDrugs>{
        return this.prescriptiondrugservice.getone(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) presupdatedto:PrescriptionDrugUpdatedto){
        return this.prescriptiondrugservice.update(id,presupdatedto);
    }

    @Delete(":id")
    delete(@Param("id") id:string){
        return this.prescriptiondrugservice.delete(id);
    }
}