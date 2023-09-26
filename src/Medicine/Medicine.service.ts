import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MedicineClass } from "./Medicine.schema";
import { Model } from "mongoose";
import { Medicine } from "./Medicine.interface";
import { MedicineCreatedto } from "./MedicineCteatedto.dto";
import { MedicineUpdatedto } from "./MedicineUpdatedto.dto";

@Injectable()
export class MedicineService{
    constructor(
        @InjectModel(MedicineClass.name)
        private readonly medicinemodel:Model<MedicineClass>
    ){}

    async getall():Promise<Medicine[]>{
        return await this.medicinemodel.find().exec();
    }

    async create(medicinecreatedto:MedicineCreatedto):Promise<Medicine>{
        try{
            return await this.medicinemodel.create(medicinecreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<Medicine>{
        try{
            return await this.medicinemodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, medicineupdatedto:MedicineUpdatedto):Promise<Medicine>{
        try{
            return await this.medicinemodel.findByIdAndUpdate(id,medicineupdatedto,{
                new:true
            })
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<Medicine>{
        try{
            return await this.medicinemodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}