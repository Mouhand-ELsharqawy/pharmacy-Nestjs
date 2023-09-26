import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PrescriptionClass, PrescriptionSchema } from "./Prescription.schema";
import { PrescriptionController } from "./Prescription.controller";
import { PrescriptionService } from "./Prescription.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: PrescriptionClass.name,
                schema: PrescriptionSchema
            }
        ])
    ],
    controllers: [ PrescriptionController ],
    providers: [ PrescriptionService ]
})
export class PrescriptionModule{}