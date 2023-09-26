import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PrescriptionDrugClass } from "./PrescriptionDrugs.schema";
import { Model } from "mongoose";
import { PrescriptionDrugs } from "./PrescriptionDrugs.interface";
import { PrescriptionDrugCreatedto } from "./PrescriptionDrugsCreatedto.dto";
import { PrescriptionDrugUpdatedto } from "./PrescriptionDrugsUpdatedto.dto";

@Injectable()
export class PrescriptionDrugService{
    constructor(
        @InjectModel(PrescriptionDrugClass.name)
        private readonly presmodel:Model<PrescriptionDrugClass>
    ){}

    async getall():Promise<PrescriptionDrugs[]>{
        return await this.presmodel.find().exec();
    }

    async create(prescreatedto:PrescriptionDrugCreatedto):Promise<PrescriptionDrugs>{
        try{
            return await this.presmodel.create(prescreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<PrescriptionDrugs>{
        try{
            return await this.presmodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, presupdatedto:PrescriptionDrugUpdatedto):Promise<PrescriptionDrugs>{
        try{
            return await this.presmodel.findByIdAndUpdate(id,presupdatedto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<PrescriptionDrugs>{
        try{
            return await this.presmodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}