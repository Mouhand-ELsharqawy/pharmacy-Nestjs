import { PartialType } from "@nestjs/mapped-types";
import { OrderCreatedto } from "./OrderCreatedto.dto";

export class OrderUpdatedto extends PartialType(OrderCreatedto){}