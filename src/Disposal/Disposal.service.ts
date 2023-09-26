import { Injectable, NotFoundException } from "@nestjs/common";
import { DisposalClass } from "./Disposal.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Disposal } from "./Disposal.interface";
import { DisposalCreatedto } from "./DisposalCreatedto.dto";
import { DisposalUpdatedto } from "./DisposalUpdatedto.dto";

@Injectable()
export class DisposalService{
    constructor(
        @InjectModel(DisposalClass.name)
        private readonly disposalmodel:Model<DisposalClass>
    ){}

    async getall():Promise<Disposal[]>{
        return await this.disposalmodel.find().exec();
    }

    async create(disposalcreatedto:DisposalCreatedto):Promise<Disposal>{
        try{
            return await this.disposalmodel.create(disposalcreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }
    async getone(id:string):Promise<Disposal>{
        try{
            return await this.disposalmodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, disposalupdatedto:DisposalUpdatedto):Promise<Disposal>{
        try{
            return await this.disposalmodel.findByIdAndUpdate(id,disposalupdatedto,{
                new:true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<Disposal>{
        try{
            return await this.disposalmodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}