import { PartialType } from "@nestjs/mapped-types";
import { InsuranceCreatedto } from "./InsuranceCreatedto.dto";

export class InsuranceUpdatedto extends PartialType(InsuranceCreatedto){}