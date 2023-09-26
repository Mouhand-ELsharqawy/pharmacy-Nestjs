import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EmployeeClass } from "./Employee.schema";
import { Model } from "mongoose";
import { Employee } from "./Employee.interface";
import { EmployeeCreatedto } from "./EmployeeCreatedto.dto";
import { EmployeeUpdatedto } from "./EmployeeUpdatedto.dto";

@Injectable()
export class EmployeeService{
    constructor(
        @InjectModel(EmployeeClass.name)
        private readonly employeemodel:Model<EmployeeClass>
    ){}

    async getall():Promise<Employee[]>{
        return await this.employeemodel.find().exec();
    }

    async create(employeecreatedto:EmployeeCreatedto):Promise<Employee>{
        try{
            return await this.employeemodel.create(employeecreatedto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async getone(id:string):Promise<Employee>{
        try{
            return await this.employeemodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string,employeeupdatedto:EmployeeUpdatedto):Promise<Employee>{
        try{
            return await this.employeemodel.findByIdAndUpdate(id,employeeupdatedto,{
                new:true
            })
        }catch(error){
            throw new NotFoundException();
        }
    }

    async delete(id:string):Promise<Employee>{
        try{
            return await this.employeemodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}