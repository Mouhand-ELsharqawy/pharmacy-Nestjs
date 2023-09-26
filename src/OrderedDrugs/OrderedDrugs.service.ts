import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { OrderedDrugClass } from "./OrderedDrugs.schema";
import { Model } from "mongoose";
import { OrderedDrugs } from "./OrderedDrugs.interface";
import { OrderedDrugCreatedto } from "./OrderedDrugsCreatedto.dto";
import { OrderedDrugUpdatedto } from "./OrderedDrugsUpdatedto.dto";

@Injectable()
export class OrderedDrugService{
    constructor(
        @InjectModel(OrderedDrugClass.name)
        private readonly ordereddrugmodel:Model<OrderedDrugClass>
    ){}

    async getall():Promise<OrderedDrugs[]>{
        return await this.ordereddrugmodel.find().exec();
    }

    async create(ordereddrugcreatedto:OrderedDrugCreatedto):Promise<OrderedDrugs>{
        try{
            return await this.ordereddrugmodel.create(ordereddrugcreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<OrderedDrugs>{
        try{
            return await this.ordereddrugmodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string,ordereddrugupdatedto:OrderedDrugUpdatedto):Promise<OrderedDrugs>{
        try{
            return await this.ordereddrugmodel.findByIdAndUpdate(id,ordereddrugupdatedto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<OrderedDrugs>{
        try{
            return await this.ordereddrugmodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}