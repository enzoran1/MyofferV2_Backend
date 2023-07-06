import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  getNotificationById(id: string) {
    // Implémentez la logique pour récupérer une notification par son ID ici
  }

  markNotificationAsRead(id: string) {
    // Implémentez la logique pour marquer une notification comme lue ici
  }
}
