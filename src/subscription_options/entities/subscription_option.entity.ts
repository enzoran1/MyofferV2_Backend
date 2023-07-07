import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class SubscriptionOption {
    @PrimaryGeneratedColumn()
    id: number;
}
