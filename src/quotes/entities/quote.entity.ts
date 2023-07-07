import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Quote {
        
            @PrimaryGeneratedColumn()
            id: number;
}
