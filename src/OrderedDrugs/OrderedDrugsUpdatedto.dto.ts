import { PartialType } from "@nestjs/mapped-types";
import { OrderedDrugCreatedto } from "./OrderedDrugsCreatedto.dto";

export class OrderedDrugUpdatedto extends PartialType(OrderedDrugCreatedto){}