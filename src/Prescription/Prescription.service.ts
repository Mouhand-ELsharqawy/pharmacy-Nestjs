import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PrescriptionClass } from "./Prescription.schema";
import { Model } from "mongoose";
import { Prescription } from "./Prescription.interface";
import { PrescriptionCreatedto } from "./PrescriptionCreatedto.dto";
import { PrescriptionUpdatedto } from "./PrescriptionUpdatedto.dto";

@Injectable()
export class PrescriptionService{
    constructor(
        @InjectModel(PrescriptionClass.name)
        private readonly prescriptionmodel:Model<PrescriptionClass>
    ){}

    async getall():Promise<Prescription[]>{
        return await this.prescriptionmodel.find().exec();
    }

    async create(prescriptioncreatedto:PrescriptionCreatedto):Promise<Prescription>{
        try{
            return await this.prescriptionmodel.create(prescriptioncreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<Prescription>{
        try{
            return await this.prescriptionmodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, prescriptionupdatedto:PrescriptionUpdatedto):Promise<Prescription>{
        try{
            return await this.prescriptionmodel.findByIdAndUpdate(id,prescriptionupdatedto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<Prescription>{
        try{
            return await this.prescriptionmodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}