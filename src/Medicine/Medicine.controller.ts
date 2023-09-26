import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { MedicineService } from "./Medicine.service";
import { Medicine } from "./Medicine.interface";
import { MedicineCreatedto } from "./MedicineCteatedto.dto";
import { MedicineUpdatedto } from "./MedicineUpdatedto.dto";

@Controller("medicine")
export class MedicineController{
    constructor(
        private readonly medicineservice:MedicineService
    ){}

    @Get()
    getall():Promise<Medicine[]>{
        return this.medicineservice.getall();
    }

    @Post()
    create(@Body(ValidationPipe) medicinecreatedto:MedicineCreatedto):Promise<Medicine>{
        return this.medicineservice.create(medicinecreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<Medicine>{
        return this.medicineservice.getone(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) medicineupdatedto:MedicineUpdatedto):Promise<Medicine>{
        return this.medicineservice.update(id,medicineupdatedto);
    }

    @Delete(":id")
    delete(@Param("id") id:string):Promise<Medicine>{
        return this.medicineservice.delete(id);
    }
}