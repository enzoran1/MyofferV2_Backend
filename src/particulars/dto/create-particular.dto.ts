export class CreateParticularDto {
    user_id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    gender: string;
    postal_code: string;
    commune: string;
    city: string;
    street_number: string;
    address_complement?: string;
    region?: string;
  }
  