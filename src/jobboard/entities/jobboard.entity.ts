import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Jobboard {
        
            @PrimaryGeneratedColumn()
            id: number;
}
