import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EmployeeClass, EmployeeSchema } from "./Employee.schema";
import { EmployeeController } from "./Employee.controller";
import { EmployeeService } from "./Employee.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: EmployeeClass.name,
                schema: EmployeeSchema
            }
        ])
    ],
    controllers: [ EmployeeController ],
    providers: [ EmployeeService ]
})
export class EmployeeModule{}