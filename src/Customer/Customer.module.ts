import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerClass, CustomerSchema } from "./Customer.schema";
import { Customercontroller } from "./Customer.controller";
import { CustomerService } from "./Customer.service";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: CustomerClass.name,
                schema: CustomerSchema
            }
        ])
    ],
    controllers: [ Customercontroller ],
    providers: [ CustomerService ]
})
export class CustomerModule{}