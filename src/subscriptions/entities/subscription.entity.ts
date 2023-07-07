import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Subscription {
        
            @PrimaryGeneratedColumn()
            id: number;
}
