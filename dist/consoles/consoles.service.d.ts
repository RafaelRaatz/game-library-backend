import { Repository } from 'typeorm';
import { CreateConsoleDto } from './dto/create-console.dto';
import { Console } from './entities/console.entity';
export declare class ConsolesService {
    private readonly ConsoleRepository;
    constructor(ConsoleRepository: Repository<Console>);
    create(createConsoleDto: CreateConsoleDto): Promise<Console>;
    findAll(): Promise<Console[]>;
    findOne(id: number): string;
    remove(id: number): string;
}
