export class CreateQuoteDto {
    user_id: number;
    title: string;
    description: string;
    region?: string;
    commune?: string;
    budget: number;
    desired_date: Date;
    num_quotes_wanted: number;
    attachment1?: string;
    attachment2?: string;
    attachment3?: string;
  }
  