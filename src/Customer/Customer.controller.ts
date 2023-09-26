import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { CustomerService } from "./Customer.service";
import { Customer } from "./Customer.interface";
import { CustomerCreatedto } from "./CustomerCreatedto.dto";
import { CustomerUpdatedto } from "./CustomerUpdatedto.dto";

@Controller("customer")
export class Customercontroller{
    constructor(
        private readonly customerservice:CustomerService
    ){}

    @Get()
    getall():Promise<Customer[]>{
        return this.customerservice.getall();
    }

    @Post()
    create(@Body(ValidationPipe) customercreatedto:CustomerCreatedto):Promise<Customer>{
        return this.customerservice.create(customercreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<Customer>{
        return this.customerservice.getone(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) customerupdatedto:CustomerUpdatedto):Promise<Customer>{
        return this.customerservice.update(id,customerupdatedto);
    }

    @Delete(":id")
    delete(@Param("id") id:string):Promise<Customer>{
        return this.customerservice.delete(id)
    }
}