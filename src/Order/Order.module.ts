import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderClass, OrderSchema } from "./Order.schema";
import { OrderController } from "./Order.controller";
import { OrderService } from "./Order.service";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: OrderClass.name,
                schema: OrderSchema
            }
        ])
    ],
    controllers: [ OrderController ],
    providers: [ OrderService ]
})
export class OrderModule{}