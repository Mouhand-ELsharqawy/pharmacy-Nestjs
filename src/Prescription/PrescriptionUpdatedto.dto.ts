import { PartialType } from "@nestjs/mapped-types";
import { PrescriptionCreatedto } from "./PrescriptionCreatedto.dto";

export class PrescriptionUpdatedto extends PartialType(PrescriptionCreatedto){}