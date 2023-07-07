import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class SecteursActivite {
        
            @PrimaryGeneratedColumn()
            id: number;
}
