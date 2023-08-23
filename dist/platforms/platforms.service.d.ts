import { Repository } from 'typeorm';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { Platform } from './entities/platform.entity';
export declare class PlatformsService {
    private readonly PlatformRepository;
    constructor(PlatformRepository: Repository<Platform>);
    create(createPlatformDto: CreatePlatformDto): Promise<Platform>;
    findAll(): Promise<Platform[]>;
    remove(id: string): Promise<Platform>;
}
