import { Subscription } from '../../subscriptions/entities/subscription.entity';
import { Particular } from '../../particulars/entities/particular.entity';
import { Company } from '../../companies/entities/company.entity';
import { Quote } from '../../quotes/entities/quote.entity';
import { Jobboard } from '../../jobboard/entities/jobboard.entity';
import { Notification } from '../../notifications/entities/notification.entity';
import { Payment } from '../../payments/entities/payment.entity';
import { UniquePurchase } from '../../unique_purchases/entities/unique_purchase.entity';
import { JobboardContact } from '../../jobboard_contacts/entities/jobboard_contact.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    user_type: string;
    subscription_id: number;
    subscription: Subscription;
    particular: Particular;
    company: Company[];
    quotes: Quote[];
    jobboards: Jobboard[];
    jobboardContacts: JobboardContact[];
    notifications: Notification[];
    payments: Payment[];
    uniquePurchases: UniquePurchase[];
}
