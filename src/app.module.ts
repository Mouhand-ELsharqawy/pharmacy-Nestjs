import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillModule } from './Bill/Bill.module';
import { CustomerModule } from './Customer/Customer.module';
import { DisposalModule } from './Disposal/Disposal.module';
import { EmployeeModule } from './Employee/Employee.module';
import { InsuranceModule } from './Insurance/Insurance.module';
import { MedicineModule } from './Medicine/Medicine.module';
import { NotificationModule } from './Notifications/Notifications.module';
import { OrderModule } from './Order/Order.module';
import { OrderedDrugModule } from './OrderedDrugs/OrderedDrugs.module';
import { PrescriptionModule } from './Prescription/Prescription.module';
import { PrescriptionDrugsModule } from './PrescriptionDrugs/PrescriptionDrugs.module';

@Module({
  imports: [
    MongooseModule.forRoot(''),
    BillModule,
    CustomerModule,
    DisposalModule,
    EmployeeModule,
    InsuranceModule,
    MedicineModule,
    NotificationModule,
    OrderModule,
    OrderedDrugModule,
    PrescriptionModule,
    PrescriptionDrugsModule
  ]
}) 
export class AppModule {}
