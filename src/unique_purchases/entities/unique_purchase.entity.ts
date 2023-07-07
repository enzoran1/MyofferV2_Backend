import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UniquePurchase {
        
            @PrimaryGeneratedColumn()
            id: number;
}
