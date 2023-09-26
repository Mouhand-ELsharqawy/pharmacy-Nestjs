import { PartialType } from "@nestjs/mapped-types";
import { NotificationCreatedto } from "./NotificationsCreatedto.dto";

export class NotificationUpdatedto extends PartialType(NotificationCreatedto){}