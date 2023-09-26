import { PartialType } from "@nestjs/mapped-types";
import { DisposalCreatedto } from "./DisposalCreatedto.dto";

export class DisposalUpdatedto extends PartialType(DisposalCreatedto){}