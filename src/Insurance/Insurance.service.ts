import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { InsuranceClass } from "./Insurance.schema";
import { Model } from "mongoose";
import { Insurance } from "./Insurance.interface";
import { InsuranceCreatedto } from "./InsuranceCreatedto.dto";
import { InsuranceUpdatedto } from "./InsuranceUpdatedto.dto";

@Injectable()
export class InsuranceService{
    constructor(
        @InjectModel(InsuranceClass.name)
        private readonly insurancemodel:Model<InsuranceClass>
    ){}

    async getall():Promise<Insurance[]>{
        return await this.insurancemodel.find().exec();
    }

    async create(insurancecreatedto:InsuranceCreatedto):Promise<Insurance>{
        try{
            return await this.insurancemodel.create(insurancecreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<Insurance>{
        try{
            return await this.insurancemodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, insurancrupdatedto:InsuranceUpdatedto):Promise<Insurance>{
        try{
            return await this.insurancemodel.findByIdAndUpdate(id,insurancrupdatedto,{
                new: true
            })
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<Insurance>{
        try{
            return await this.insurancemodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}