import { PartialType } from "@nestjs/mapped-types";
import { EmployeeCreatedto } from "./EmployeeCreatedto.dto";

export class EmployeeUpdatedto extends PartialType(EmployeeCreatedto){}