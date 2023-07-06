import { Injectable } from '@nestjs/common';
import { CreateParticularDto } from './dto/create-particular.dto';
import { UpdateParticularDto } from './dto/update-particular.dto';

@Injectable()
export class ParticularService {
  createParticular(createParticularDto: CreateParticularDto) {
    // Implémentez la logique de création d'un particulier ici
  }

  getAllParticulars() {
    // Implémentez la logique pour récupérer tous les particuliers ici
  }

  getParticularById(id: string) {
    // Implémentez la logique pour récupérer un particulier par son ID ici
  }

  updateParticular(id: string, updateParticularDto: UpdateParticularDto) {
    // Implémentez la logique de mise à jour d'un particulier ici
  }

  deleteParticular(id: string) {
    // Implémentez la logique de suppression d'un particulier ici
  }
}
