import { PartialType } from "@nestjs/mapped-types";
import { BillCreatedto } from "./BillCreatedto.dto";

export class BillUpdatedto extends PartialType(BillCreatedto){}