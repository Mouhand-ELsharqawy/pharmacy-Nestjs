import { Injectable, NotFoundException }  from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose";
import { BillClass } from "./Bill.schema";
import { Model } from "mongoose";
import { Bill } from "./Bill.interface";
import { BillCreatedto } from "./BillCreatedto.dto";
import { BillUpdatedto } from "./BillUpdatedto.dto";

@Injectable()
export class BillService{
    constructor(
        @InjectModel(BillClass.name)
        private readonly billmodel:Model<BillClass>
    ){}

    async getall():Promise<Bill[]>{
        return await this.billmodel.find().exec();
    }

    async create(billcreatedto:BillCreatedto):Promise<Bill>{
        try{
            return await this.billmodel.create(billcreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<Bill>{
        try{
            return await this.billmodel.findById(id)
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, billupdatedto:BillUpdatedto):Promise<Bill>{
        try{
            return await this.billmodel.findByIdAndUpdate(id,billupdatedto,{
                new:true
            })
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<Bill>{
        try{
            return await this.billmodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}