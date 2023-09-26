import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PrescriptionDrugClass, PrescriptionDrugSchema } from "./PrescriptionDrugs.schema";
import { PrescriptionDrugController } from "./PrescriptionDrugs.controller";
import { PrescriptionDrugService } from "./PrescriptionDrugs.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: PrescriptionDrugClass.name,
                schema: PrescriptionDrugSchema
            }
        ])
    ],
    controllers: [ PrescriptionDrugController ],
    providers: [ PrescriptionDrugService ]
})
export class PrescriptionDrugsModule{}