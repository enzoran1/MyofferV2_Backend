import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    createUser(createUserDto: CreateUserDto): void;
    getAllUsers(): void;
    getUserById(id: string): void;
    updateUser(id: string, updateUserDto: UpdateUserDto): void;
    deleteUser(id: string): void;
}
