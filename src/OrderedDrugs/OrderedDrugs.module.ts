import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderedDrugClass, OrderedDrugSchema } from "./OrderedDrugs.schema";
import { OrderedDrugController } from "./OrderedDrugs.controller";
import { OrderedDrugService } from "./OrderedDrugs.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: OrderedDrugClass.name,
                schema: OrderedDrugSchema
            }
        ])
    ],
    controllers: [ OrderedDrugController ],
    providers: [ OrderedDrugService ]
})
export class OrderedDrugModule{}