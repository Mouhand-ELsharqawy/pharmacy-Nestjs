import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MedicineClass, MedicineSchema } from "./Medicine.schema";
import { MedicineController } from "./Medicine.controller";
import { MedicineService } from "./Medicine.service";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: MedicineClass.name,
                schema: MedicineSchema
            }
        ])
    ],
    controllers: [ MedicineController ],
    providers: [ MedicineService ]
})
export class MedicineModule {}