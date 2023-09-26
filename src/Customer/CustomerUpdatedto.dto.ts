import { PartialType } from "@nestjs/mapped-types";
import { CustomerCreatedto } from "./CustomerCreatedto.dto";

export class CustomerUpdatedto extends PartialType(CustomerCreatedto){}