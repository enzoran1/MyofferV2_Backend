import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Particular } from './particulars/entities/particular.entity';
import { Company } from './companies/entities/company.entity';
import { Subscription } from './subscriptions/entities/subscription.entity';
import { SubscriptionOption } from './subscription_options/entities/subscription_option.entity';
import { Option } from './options/entities/option.entity';
import { Quote } from './quotes/entities/quote.entity';
import { Jobboard } from './jobboard/entities/jobboard.entity';
import { JobboardContact } from './jobboard_contacts/entities/jobboard_contact.entity';
import { Notification } from './notifications/entities/notification.entity';
import { Payment } from './payments/entities/payment.entity';
import { UniquePurchase } from './unique_purchases/entities/unique_purchase.entity';
import { Category } from './categories/entities/category.entity';
import { SecteurActivite } from './secteurs_activite/entities/secteurs_activite.entity';


import { ParticularsModule } from './particulars/particulars.module';
import { CompaniesModule } from './companies/companies.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { SubscriptionOptionsModule } from './subscription_options/subscription_options.module';
import { OptionsModule } from './options/options.module';
import { QuotesModule } from './quotes/quotes.module';
import { JobboardModule } from './jobboard/jobboard.module';
import { JobboardContactsModule } from './jobboard_contacts/jobboard_contacts.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaymentsModule } from './payments/payments.module';
import { UniquePurchasesModule } from './unique_purchases/unique_purchases.module';
import { CategoriesModule } from './categories/categories.module';
import { SecteursActiviteModule } from './secteurs_activite/secteurs_activite.module';


@Module({
  imports: [
   


    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'MyOfferV2',
      entities: [User, Particular, Company, Subscription, SubscriptionOption, Option, Quote, Jobboard, JobboardContact, Notification, Payment, UniquePurchase, Category, SecteurActivite],
      synchronize: true,
    }),
   


    UserModule,
   


    ParticularsModule,
   


    CompaniesModule,
   


    SubscriptionsModule,
   


    SubscriptionOptionsModule,
   


    OptionsModule,
   


    QuotesModule,
   


    JobboardModule,
   


    JobboardContactsModule,
   


    NotificationsModule,
   


    PaymentsModule,
   


    UniquePurchasesModule,
   


    CategoriesModule,
   


    SecteursActiviteModule,
   


    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
