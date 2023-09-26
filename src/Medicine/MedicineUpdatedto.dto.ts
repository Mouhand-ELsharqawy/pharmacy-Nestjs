import { PartialType } from "@nestjs/mapped-types";
import { MedicineCreatedto } from "./MedicineCteatedto.dto";

export class MedicineUpdatedto extends PartialType(MedicineCreatedto){}