import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersRepository extends Repository<User> {
    findById(id: string): Promise<User | undefined>;
}
export default UsersRepository;
