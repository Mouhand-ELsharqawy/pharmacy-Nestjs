import { PartialType } from "@nestjs/mapped-types";
import { PrescriptionDrugCreatedto } from "./PrescriptionDrugsCreatedto.dto";

export class PrescriptionDrugUpdatedto extends PartialType(PrescriptionDrugCreatedto){}