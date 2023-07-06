export class CreateNotificationDto {
    readonly user_id: number;
    readonly content: string;
    readonly is_read: boolean;
}
