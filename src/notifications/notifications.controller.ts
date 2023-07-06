import { Controller, Get, Patch, Param } from '@nestjs/common';
import { NotificationService } from './notifications.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get(':id')
  getNotificationById(@Param('id') id: string) {
    return this.notificationService.getNotificationById(id);
  }

  @Patch(':id/read')
  markNotificationAsRead(@Param('id') id: string) {
    return this.notificationService.markNotificationAsRead(id);
  }
}
