export class CreateCompanyDto {
    user_id: number;
    company_name: string;
    registration_number: string;
    vat_number: string;
    postal_code: string;
    commune: string;
    city: string;
    street_number: string;
    address_complement?: string;
    legal_form: string;
    region?: string;
  }
  