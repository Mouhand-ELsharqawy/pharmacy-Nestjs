import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { InsuranceClass, InsuranceSchema } from "./Insurance.schema";
import { InsuranceController } from "./Insurance.controller";
import { InsuranceService } from "./Insurance.service";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: InsuranceClass.name,
                schema: InsuranceSchema
            }
        ])
    ],
    controllers: [ InsuranceController ],
    providers: [ InsuranceService ] 
})
export class InsuranceModule{}