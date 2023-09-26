import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BillClass, BillSchema } from "./Bill.schema";
import { BillController } from "./Bill.controller";
import { BillService } from "./Bill.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: BillClass.name,
                schema: BillSchema
            }
        ])
    ],
    controllers: [ BillController ],
    providers: [ BillService ]
})
export class BillModule {}