import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CustomerClass } from "./Customer.schema";
import { Model } from "mongoose";
import { Customer } from "./Customer.interface";
import { CustomerCreatedto } from "./CustomerCreatedto.dto";
import { CustomerUpdatedto } from "./CustomerUpdatedto.dto";

@Injectable()
export class CustomerService{
    constructor(
        @InjectModel(CustomerClass.name)
        private readonly customermodel:Model<CustomerClass>
    ){}

    async getall():Promise<Customer[]>{
        return await this.customermodel.find().exec();
    }

    async create(customercreatedto:CustomerCreatedto):Promise<Customer>{
        try{
            return await this.customermodel.create(customercreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<Customer>{
        try{
            return await this.customermodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, customerupdatedto:CustomerUpdatedto):Promise<Customer>{
        try{
            return await this.customermodel.findByIdAndUpdate(id,customerupdatedto,{
                new: true
            })
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<Customer>{
        try{
            return await this.customermodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}