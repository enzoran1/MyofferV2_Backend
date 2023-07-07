import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class JobboardContact {
        
            @PrimaryGeneratedColumn()
            id: number;
}
