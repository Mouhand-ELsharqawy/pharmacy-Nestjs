import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { EmployeeService } from "./Employee.service";
import { Employee } from "./Employee.interface";
import { EmployeeCreatedto } from "./EmployeeCreatedto.dto";
import { EmployeeUpdatedto } from "./EmployeeUpdatedto.dto";

@Controller("employee")
export class EmployeeController{
    constructor(
        private readonly employeeservice:EmployeeService
    ){}

    @Get()
    getall():Promise<Employee[]>{
        return this.employeeservice.getall();
    }

    @Post()
    create(@Body(
        ValidationPipe
        ) employeecreatedto:EmployeeCreatedto):Promise<Employee>{
        return this.employeeservice.create(employeecreatedto);
    }

    @Get(":id")
    getone(@Param("id") id:string):Promise<Employee>{
        return this.employeeservice.getone(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) employeeupdatedto:EmployeeUpdatedto):Promise<Employee>{
        return this.employeeservice.update(id,employeeupdatedto);
    }

    @Delete(":id")
    delete(@Param("id") id:string):Promise<Employee>{
        return this.employeeservice.delete(id);
    }
}