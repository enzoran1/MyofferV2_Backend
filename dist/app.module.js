"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/entities/user.entity");
const particular_entity_1 = require("./particulars/entities/particular.entity");
const company_entity_1 = require("./companies/entities/company.entity");
const subscription_entity_1 = require("./subscriptions/entities/subscription.entity");
const subscription_option_entity_1 = require("./subscription_options/entities/subscription_option.entity");
const option_entity_1 = require("./options/entities/option.entity");
const quote_entity_1 = require("./quotes/entities/quote.entity");
const jobboard_entity_1 = require("./jobboard/entities/jobboard.entity");
const jobboard_contact_entity_1 = require("./jobboard_contacts/entities/jobboard_contact.entity");
const notification_entity_1 = require("./notifications/entities/notification.entity");
const payment_entity_1 = require("./payments/entities/payment.entity");
const unique_purchase_entity_1 = require("./unique_purchases/entities/unique_purchase.entity");
const category_entity_1 = require("./categories/entities/category.entity");
const secteurs_activite_entity_1 = require("./secteurs_activite/entities/secteurs_activite.entity");
const particulars_module_1 = require("./particulars/particulars.module");
const companies_module_1 = require("./companies/companies.module");
const subscriptions_module_1 = require("./subscriptions/subscriptions.module");
const subscription_options_module_1 = require("./subscription_options/subscription_options.module");
const options_module_1 = require("./options/options.module");
const quotes_module_1 = require("./quotes/quotes.module");
const jobboard_module_1 = require("./jobboard/jobboard.module");
const jobboard_contacts_module_1 = require("./jobboard_contacts/jobboard_contacts.module");
const notifications_module_1 = require("./notifications/notifications.module");
const payments_module_1 = require("./payments/payments.module");
const unique_purchases_module_1 = require("./unique_purchases/unique_purchases.module");
const categories_module_1 = require("./categories/categories.module");
const secteurs_activite_module_1 = require("./secteurs_activite/secteurs_activite.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'MyOfferV2',
                entities: [user_entity_1.User, particular_entity_1.Particular, company_entity_1.Company, subscription_entity_1.Subscription, subscription_option_entity_1.SubscriptionOption, option_entity_1.Option, quote_entity_1.Quote, jobboard_entity_1.Jobboard, jobboard_contact_entity_1.JobboardContact, notification_entity_1.Notification, payment_entity_1.Payment, unique_purchase_entity_1.UniquePurchase, category_entity_1.Category, secteurs_activite_entity_1.SecteurActivite],
                synchronize: true,
            }),
            user_module_1.UserModule,
            particulars_module_1.ParticularsModule,
            companies_module_1.CompaniesModule,
            subscriptions_module_1.SubscriptionsModule,
            subscription_options_module_1.SubscriptionOptionsModule,
            options_module_1.OptionsModule,
            quotes_module_1.QuotesModule,
            jobboard_module_1.JobboardModule,
            jobboard_contacts_module_1.JobboardContactsModule,
            notifications_module_1.NotificationsModule,
            payments_module_1.PaymentsModule,
            unique_purchases_module_1.UniquePurchasesModule,
            categories_module_1.CategoriesModule,
            secteurs_activite_module_1.SecteursActiviteModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map