"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const subscription_entity_1 = require("../../subscriptions/entities/subscription.entity");
const particular_entity_1 = require("../../particulars/entities/particular.entity");
const company_entity_1 = require("../../companies/entities/company.entity");
const quote_entity_1 = require("../../quotes/entities/quote.entity");
const jobboard_entity_1 = require("../../jobboard/entities/jobboard.entity");
const notification_entity_1 = require("../../notifications/entities/notification.entity");
const payment_entity_1 = require("../../payments/entities/payment.entity");
const unique_purchase_entity_1 = require("../../unique_purchases/entities/unique_purchase.entity");
const jobboard_contact_entity_1 = require("../../jobboard_contacts/entities/jobboard_contact.entity");
let User = exports.User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "user_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "subscription_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subscription_entity_1.Subscription),
    (0, typeorm_1.JoinColumn)({ name: 'subscription_id' }),
    __metadata("design:type", subscription_entity_1.Subscription)
], User.prototype, "subscription", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => particular_entity_1.Particular, particular => particular.user),
    __metadata("design:type", particular_entity_1.Particular)
], User.prototype, "particular", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => company_entity_1.Company, company => company.user),
    __metadata("design:type", Array)
], User.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => quote_entity_1.Quote, quote => quote.user),
    __metadata("design:type", Array)
], User.prototype, "quotes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => jobboard_entity_1.Jobboard, jobboard => jobboard.user),
    __metadata("design:type", Array)
], User.prototype, "jobboards", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => jobboard_contact_entity_1.JobboardContact, jobboardContact => jobboardContact.user),
    __metadata("design:type", Array)
], User.prototype, "jobboardContacts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.Notification, notification => notification.user),
    __metadata("design:type", Array)
], User.prototype, "notifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.Payment, payment => payment.user),
    __metadata("design:type", Array)
], User.prototype, "payments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => unique_purchase_entity_1.UniquePurchase, uniquePurchase => uniquePurchase.user),
    __metadata("design:type", Array)
], User.prototype, "uniquePurchases", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map