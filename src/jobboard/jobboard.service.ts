import { Injectable } from '@nestjs/common';
import { CreateJobboardDto } from './dto/create-jobboard.dto';
import { UpdateJobboardDto } from './dto/update-jobboard.dto';

@Injectable()
export class JobboardService {
  createJobboard(createJobboardDto: CreateJobboardDto) {
    // Implémentez la logique de création d'un jobboard ici
  }

  getAllJobboards() {
    // Implémentez la logique pour récupérer tous les jobboards ici
  }

  getJobboardById(id: string) {
    // Implémentez la logique pour récupérer un jobboard par son ID ici
  }

  updateJobboard(id: string, updateJobboardDto: UpdateJobboardDto) {
    // Implémentez la logique de mise à jour d'un jobboard ici
  }

  deleteJobboard(id: string) {
    // Implémentez la logique de suppression d'un jobboard ici
  }
}
