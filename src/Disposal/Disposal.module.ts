import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DisposalClass, DisposalSchema } from "./Disposal.schema";
import { DisposalController } from "./Disposal.controller";
import { DisposalService } from "./Disposal.service";


@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: DisposalClass.name,
                schema: DisposalSchema
            }
        ])
    ],
    controllers: [ DisposalController ],
    providers: [ DisposalService ]
})
export class DisposalModule{}